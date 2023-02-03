const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admin:{
        type: String,
        required: true
    },
    product: [
        {
            name: {
                type: String,
                required: true
              },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
},{
    timestamps: true
});

const Product = mongoose.model('product', adminSchema);

module.exports = Product;