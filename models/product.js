const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({

    rate: {
        type: Number,
        min: 1
    }
})


const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,

    },
    price: {
        type: Number,
        required: true

    },
    description: String,
    category: String,
    image: String,

})


const product = mongoose.model('product', productSchema)

module.exports = product