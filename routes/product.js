const express = require('express')
const router = express.Router() // Router le hyaa baatw info collect garne then index.js ;alia vanx some parts are here too

//hya define/mention garema vane createProduct not define vanx 
const { returnProducts, returnSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product')

router.get("/", returnProducts)

router.get("/:productID", returnSingleProduct)

router.post('/', createProduct)

router.patch('/:productID', updateProduct);

router.delete('/:productID', deleteProduct);


module.exports = router