const express = require('express')
const router = express.Router() // Router le hyaa baatw info collect garne then index.js ;alia vanx some parts are here too
const { products } = require('../data')
const product = require('../models/product')


const { returnProducts, returnSingleProduct } = require('../controller/product')
const async = require('hbs/lib/async')

router.get("/", returnProducts)

router.get("/:productID", returnSingleProduct)

router.post('/', async(req, res) => {

    await product.create(req.body);
    res.send(req.body)

})


// router.patch('/:productID', updateProduct);

// router.delete('/:productID', deleteProduct);


module.exports = router