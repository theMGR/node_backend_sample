const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
            required: true,
        },
    ],
    popular: {
        type: Boolean,
        default: false, // Default value false
       
    },
   

    recommed:{
        type:Boolean,
        default: true,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = {Product,productSchema};
