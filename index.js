const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes')

require('dotenv').config();
const mongoString = process.env.DB;
mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('connected', () =>{
    console.log(`Database Connected`)
})

const app = express();

app.use(express.json());
app.use('/',router);

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`)
})