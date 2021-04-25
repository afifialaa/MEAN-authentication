const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_CLOUD;

mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify: false});

let db = mongoose.connection;

db.on('open', ()=>{
    console.log('Connected to database');
})

db.on('error', ()=>{
    console.log('Failed to connect to db');
})

module.exports = db;