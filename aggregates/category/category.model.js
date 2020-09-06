//category.model.js
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    title: {
        type: String
    },
    createDate:{
        type: Date
    },
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;