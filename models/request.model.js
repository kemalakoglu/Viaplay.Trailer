//request.model.js
const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    parameters: {
        type: String
    },
    requestDate:{
        type: Date
    },
    ip:{
        type: String
    }
});
const Request = mongoose.model("Request", requestSchema);
module.exports = Request;