const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CLOUD, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('open', function(){
    console.log('dbConfig#open: connection established');
})

db.on('error', function(){
    console.log('dbConfig#error: connection failed');
})

module.exports = db;