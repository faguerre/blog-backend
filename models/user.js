
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Address = require('./address')
const Post = require('./post')

const _User = new Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    address: Address.schema,
    posts: [Post.schema]
})

module.exports = mongoose.model("User", _User);