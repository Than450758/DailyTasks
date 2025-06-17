const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    description :{
        type :String,
        required : true
    },
    //category field 
    category : {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "category", // <-- references the User model
        required: true

    },

    qty :{
        type : Number,
        required : true
    },

    price :{
        type :Number,
        required : true
    }




})

module.exports = mongoose.model("product",productSchema);