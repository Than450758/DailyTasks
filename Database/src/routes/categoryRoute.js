const express = require('express');
const routerCategory = express.Router();
const { getCategory, createCategory,updateCategory,deleteCategory}= require('../controllers/categorycontroller')


routerCategory.get('/getCategory',getCategory);
routerCategory.post('/createCategory',createCategory);
routerCategory.put('/updateCategory/:name',updateCategory);
routerCategory.delete('/deleteCategory/:name',deleteCategory)


module.exports=routerCategory;