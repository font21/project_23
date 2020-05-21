const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const show = console.log;


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project23'

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology:true, useNewUrlParser: true})
db.on('open', ()=> {show('Mongo works')})

app.listen(PORT, ()=> {
    show('I am connected')
})
