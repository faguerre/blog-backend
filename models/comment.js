const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
    name: String,
    email: String,
    body: String
})

module.exports = mongoose.model("Comment", Comment);