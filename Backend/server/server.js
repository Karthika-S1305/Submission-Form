const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT =5005;

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console), 'Mongodb connection error');

db.once('open', async function () {
    console.log('Mongodb connected successfully');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
