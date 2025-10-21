const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult, query } = require('express-validator');
const { getSalt } = require('bcryptjs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SIGN = "amd82197@";
const fetchuser = require('../middleware/fetchuser')


//Router 1 : Get All data from authtoken......
router.get('/dashborad', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById( userId ).select("-passWord");
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error!" })
    };
});

//Router 2 : Create a new user by post method....
router.post('/create-user',
    async (req, res) => {
        let success = true;
        //If there are any kind of errors! Send bad request.
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.send(`400, ${req.query.user}!`);
        };

        //User Function..
        try {
            let userEmail = await User.findOne({ email: req.body.email });
            let userNumber = await User.findOne({ number: req.body.number });
            if (userEmail || userNumber) {
                success = false;
                return res.status(400).json({success, error: "User Already Exists!" });
            } else {
                const salt = await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(req.body.passWord, salt);
                await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    passWord: secPass,
                    number: req.body.number
                });
                const result = res.json({success, name: req.body.name, email: req.body.email, passWord: req.body.passWord, number: req.body.number });
                console.log(result);
            };
        } catch (error) {
            console.log(error);
            res.status(500).send("Error occured!");
        };



    });


//Router 3 : Login on system and get a authtoken for fetch data.....
router.post('/login',
    body("email", "Enter a valid email.").isEmail(),
    body("passWord", "Password Can't be blank.").exists(),
    async (req, res) => {
        let success = true;
        //Validation Check 
        const error = validationResult(req);
        if (!error.isEmpty) {
            return res.status(400).json({ error: error.array });
        }

        //Get Email And Password
        const email = req.body.email;
        const password = req.body.passWord;
        try {

            // let userFindPass = await User.find(password);
            let user = await User.findOne({ email });
            if (!user) {
                success = false;
                return res.status(400).json({success, error: "Login with correct credintials." })
            };

            let userPass = await bcrypt.compare(password, user.passWord);
            if (!userPass) {
                success = false;
                return res.status(400).json({success, error: "Login with correct credintials." })
            };
            const data = {
                user: {
                    id: user.id
                }
            };
            const authLoginToken = jwt.sign(data, JWT_SIGN);
            res.json({ success, authLoginToken });

        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server error!");
        }

    });


module.exports = router;