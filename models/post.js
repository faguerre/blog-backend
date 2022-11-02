const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require('./comment')

const Post = new Schema({
    title: String,
    body: String,
    comments: {
        type: [Comment.schema]
    }
})

module.exports = mongoose.model("Post", Post);