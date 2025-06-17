const express = require('express');

const routerProduct = express.Router();

const { getProduct, createProduct,updateProduct, deleteProduct,
    getProductByCategory

}= require('../controllers/productController')


routerProduct.get('/getProduct',getProduct);
routerProduct.post('/createProduct',createProduct);
routerProduct.put('/updateProduct/:name',updateProduct);
routerProduct.delete('/deleteProduct/:name',deleteProduct) 
routerProduct.get('/category/:catId', getProductByCategory);

module.exports= routerProduct;
 