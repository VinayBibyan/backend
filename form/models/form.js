const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number},
    email: {type: String, required: true},
    contact: {type: Number}
})

const form = mongoose.model('form',formSchema);
module.exports = form;
