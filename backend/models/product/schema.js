const mongoose = require('mongoose');

const product = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    comparePrice: Number,
    costPerItem: Number,
    category: String,
    vendor: String,
    quantity: Number
},{
    versionKey: false
});

module.exports.Product  = mongoose.model('product', product);



const category = mongoose.Schema({
    name: String
},{
    versionKey: false
});

module.exports.Category  = mongoose.model('category', category);




const vendor = mongoose.Schema({
    name: String
},{
    versionKey: false
});

module.exports.Vendor  = mongoose.model('vendor', vendor);