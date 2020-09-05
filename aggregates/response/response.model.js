//response.model.js
const mongoose = require("mongoose");
const responseSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    data: {
        type: String
    },
    responseDate:{
        type: Date
    },
    responseCode:{
        type: String
    },
    responseMessage:{
        type: String
    }
});
const Response = mongoose.model("Response", responseSchema);
module.exports = Response;