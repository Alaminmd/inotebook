const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes')
const router = express.Router();


//Router 1 : Get All data from notes for specitic user......
router.get('/fetchallnote', fetchuser, async (req, res) => {
    const getAllNotes = await Notes.find({ user: req.user.id });
    res.send(getAllNotes);
});


//Router 2 : Create notes for specific user......
router.post('/addnote', fetchuser,
    body('title', 'Title must needed.').isLength({ min: 3 }),
    body('description', 'Enter your description here.').isLength({ min: 5 }),
    body('tag', 'Give a tag on your note.')
    , async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            //Get Error If anything worng!
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.send(400).json({ error: error });
            };
            const notes = new Notes({
                title, description, tag, user: req.user.id
            });
            const saveNotes = await notes.save();
            res.send(saveNotes);

        } catch (error) {
            res.send(500).json({ error: "Internal Server error!" });
        }

    });


//Router 3 : Delete note as user needed......
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found!");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(405).send("Not Allow!");
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.send({ "Success: Note has been deleted.": note })
    } catch (error) {
        res.send("Internal server error!");
        console.log(error);
    }

});


//Router 3 : Delete note as user needed......
//('/updatenotes/:id') replace :id to noteid...
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const updateNote = {};
        if (title) { updateNote.title = title };
        if (description) { updateNote.description = description };
        if (tag) { updateNote.tag = tag };

        //Find the req user on Notes...
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send(" Not found!");
        };
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed!");
        };
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: updateNote }, { new: true });
        res.send({ note });
    } catch (error) {
        res.send("Internal server error!");
        console.log(error)
    }


});


module.exports = router;