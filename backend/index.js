const connectToMongo = require('./db');
connectToMongo();
var cors = require('cors');

const express = require('express')
const app = express()
const port = 5000

 
app.use(cors())
//Most important... use express.json() in formate.
app.use(express.json());

//Routes is...
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
});