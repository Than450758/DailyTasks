const productModel = require("../models/model")

const getProduct = async(req,res) => {
    try {
        const product = await productModel.find({})
        .populate("category", "name");
        res.json({ data : product});
    }
    catch{
            res.status(500).json({ error: "Failed to fetch users" });

    }
}
//product/category/:catId
//getProductByCategory
const getProductByCategory = async(req,res) => {
    try {
        const catId = req.params.catId
        const product = await productModel.find({category: catId})
        .populate("category", "name");
        res.json({ data : product});
    }
    catch{
            res.status(500).json({ error: "Failed to fetch users" });

    }
}

const createProduct = async(req,res) => {
    try {
        const { name, description, qty , price, categoryId } = req.body;
            const newProduct = await productModel.create({ name,description, qty , price, category: categoryId});
            console.log(newProduct);
            
            res.status(201).json({ data: newProduct });
    }
    catch{
            res.status(500).json({ error: "Failed to fetch users" });

    }
}
const updateProduct = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedProduct = await productModel.findOneAndUpdate(
            { name },               // Match condition
            req.body,               // Update data
            { new: true }           // Return the updated document
        );
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ data: updatedProduct });
    } catch {
        res.status(500).json({ error: "Failed to update product" });
    }
};

// Delete a product by name
const deleteProduct = async (req, res) => {
    try {
        const { name } = req.params;
        const deletedProduct = await productModel.findOneAndDelete({ name });
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch {
        res.status(500).json({ error: "Failed to delete product" });
    }
};
module.exports = {
    createProduct,
    getProduct,deleteProduct,updateProduct,
    getProductByCategory
}