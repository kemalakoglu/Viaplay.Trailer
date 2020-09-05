//category.model.js
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    createDate:{
        type: Date
    }
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;