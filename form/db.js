const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/form';

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongoDB server')
})
db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server')
})

module.export = db;