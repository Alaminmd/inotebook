import React, { useContext, useState } from 'react'
import noteContex from '../contex/notes/noteContex'
import { toast } from 'react-toastify';
const AddNote = (props) => {
    const contex = useContext(noteContex);
    const { addNote } = contex;
    const [note, setnote] = useState({ title: "", description: "", tag: "" });
    const notify = () => toast.success("Save Successful");
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" });
        notify();
    };
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    };
    return (
        <div>
            <form>
                <div className="form-group">
                    <label className='mt-3 d-flex' htmlFor="tag">Note Tag</label>
                    <textarea className="form-control" id="tag" rows="1" placeholder='One Sentence or 3 word' name='tag' value={note.tag} minLength={3} required onChange={onChange}></textarea>
                </div>
                <div className="form-group">
                    <label className='mt-3 d-flex' htmlFor="title">Note Title</label>
                    <textarea className="form-control" id="title" rows="2" placeholder='One Sentence or 3 Word' name='title' value={note.title} minLength={3} required onChange={onChange}></textarea>

                </div>
                <div className="form-group">
                    <label className='mt-3 d-flex' htmlFor="description">Note Description</label>
                    <textarea className="form-control" id="description" rows="7" placeholder='One Sentence or 5 Word ' name='description' value={note.description} minLength={5} required onChange={onChange}></textarea>
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5 || note.tag.length < 3} type="submit" className="btn btn-primary mt-4 d-flex" onClick={handleAddNote}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote