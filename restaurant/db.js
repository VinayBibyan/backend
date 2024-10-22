const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/restaunt'
mongoose.connect(mongoURL,{
 // useNewUrlParser: true,
 // useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected',()=>{
 console.log('connected to mongoDB server')
})
db.on('disconnected',()=>{
 console.log('disconnected to mongoDB server')
})
module.export = db;