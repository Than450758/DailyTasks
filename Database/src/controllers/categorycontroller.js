const categoryModel = require("../models/category")
const getCategory = async(req,res) => {
    try {
        const category = await categoryModel.find({});
        res.json({ data : category});
    }
    catch{
            res.status(500).json({ error: "Failed to fetch users" });

    }
}

const createCategory = async(req,res) => {
    try {
        const { name } = req.body;
            const newCategory = await categoryModel.create({ name});
            console.log(newCategory);
            res.status(201).json({ data: newCategory });
    }
    catch{
            res.status(500).json({ error: "Failed to fetch users" });

    }
}
const updateCategory = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedCategory = await categoryModel.findOneAndUpdate(
            { name },               // Match condition
            req.body,               // Update data
            { new: true }           // Return the updated document
        );
        if (!updatedCategory) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ data: updatedCategory });
    } catch {
        res.status(500).json({ error: "Failed to update product" });
    }
};

// Delete a product by name
const deleteCategory = async (req, res) => {
    try {
        const { name } = req.params;
        const deletedCategory = await categoryModel.findOneAndDelete({ name });
        if (!deletedCategory) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch {
        res.status(500).json({ error: "Failed to delete product" });
    }
};
module.exports = {
   createCategory,getCategory,updateCategory,deleteCategory
}