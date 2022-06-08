const { products } = require('../data');
const { create } = require('../models/product');
const product = require('../models/product')



const returnProducts = async(req, res) => {
    //product find garne from databas
    let products = await product.find();
    let { limit } = req.query
    let newProducts = products.map((product) => {
        let { id, title, price, category, image } = product
        return { id, title, price, category, image }
    })
    if (limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }
    res.json(newProducts)
}

const returnSingleProduct = async(req, res) => {

    let { productID } = req.params
    let selectedProduct = await product.findById(productID);
    // return product.id === Number(productID)
    res.json(selectedProduct)

}
const createProduct = async(req, res) => {

    let result = await product.create({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price
    });
    res.status(201).send(result)


}
const updateProduct = async(req, res) => {
    const { productID } = req.params;

    let result = await product.findByIdAndUpdate(productID, req.body)
    res.json(result)



}


const deleteProduct = async(req, res) => {

}



module.exports = { returnProducts, returnSingleProduct, createProduct, updateProduct, deleteProduct }