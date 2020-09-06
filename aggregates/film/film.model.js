//film.model.js
const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema({

    title: {
        type: String
    },
    categoryId:{
        type: String
    },
    createDate: {
        type: Date
    },
    trailerUrl:{
        type: String
    }

});
const Film = mongoose.model("Film", filmSchema);
module.exports = Film;