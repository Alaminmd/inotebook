const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://amd82197_db_user:QpoTqXiHgyo3gqV9@cluster0.vgfzgrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/inotebook";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("Connect to mongoose successfully.");
};
module.exports = connectToMongo;
