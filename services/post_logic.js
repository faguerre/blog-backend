const PostModel = require("../models/post");
const CommentModel = require("../models/comment");
const { default: mongoose } = require("mongoose");
const Result = require('../models/DTO/obj_result')

module.exports.get = async function () {
    let result = Result;
    try {
        let posts = await PostModel.find();
        result.code = 200;
        result.data = posts
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.getById = async function (id) {
    let result = Result;
    try {
        let post = await PostModel.findById(id)
        result.code = post ? 200 : 400;
        result.data = post ? post : null
        result.message = post ? "OK" : "Not found post id " + id
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.add = async function (body) {
    let result = Result;
    try {
        let post = await PostModel.create(body);
        result.code = 200;
        result.data = post
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.addComment = async function (body, id) {
    let result = Result;
    try {
        let exist_post = await PostModel.findById(id);
        if (exist_post) {
            let add_comment = await CommentModel.create(body)
            let update_model = await PostModel.updateOne({
                _id: id,
            }, {
                $push: {
                    comments: exist_post,
                },
            });
            result.code = 200;
            result.data = update_model
            result.message = "OK"
        } else {
            result.code = 400;
            result.message = "No post found with the id " + id;
        }
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

