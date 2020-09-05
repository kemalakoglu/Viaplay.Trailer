// connection.js
const mongoose = require("mongoose");
const connection = "mongodb://localhost:27017/ViaPlayTrailer";
const connectDb = () => {
    return mongoose.connect(connection, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
};
module.exports = connectDb;