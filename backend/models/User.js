const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
        unique: true
    },   
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('user', userSchema);
User.createIndexes();
module.exports = User;