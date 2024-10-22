const mongoose = require('mongoose');

//define schema
const menuSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number},
    taste: {type: String, required: true, enum: ['sweet', 'spicy', 'sour']},
    is_drink: {type: Boolean, default: true},
    ingredients: {type: [String], default: []},
    num_sale: {type: Number, default: 0}
})

//create trainer model
const menu = mongoose.model('menu', menuSchema);
module.exports = menu;

