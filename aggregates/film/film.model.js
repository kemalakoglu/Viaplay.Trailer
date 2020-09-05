//film.model.js
const mongoose = require("mongoose");
const Category = require("../category/category.model").schema;
const filmSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    category:[Category],
    createDate: {
        type: Date
    },
    trailerUrl:{
        type: String
    }

});
const Film = mongoose.model("Film", filmSchema);
module.exports = Film;