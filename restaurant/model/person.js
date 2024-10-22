const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number},
    work: {type: String, required: true, enum: ['chef', 'waiter', 'manager', 'owner', 'cleaner']},
    mobile: {type: Number, default: true},
    email: {type: String},
    salary: {type: Number, default: 0}
})

const person = mongoose.model('person', personSchema);
module.exports = person;