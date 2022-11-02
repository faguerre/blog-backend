const CommentModel = require('../models/comment')
const PostModel = require('../models/post')
const Result = require('../models/DTO/obj_result')

module.exports.get = async function () {
    let result = Result;
    try {
        let comments = await CommentModel.find();
        result.code = 200;
        result.data = comments
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.getById = async function (id) {
    let result = Result;
    try {
        let comment = await CommentModel.findById(id);
        result.code = comment ? 200 : 400;
        result.data = comment ? comment : null
        result.message = comment ? "OK" : "Not found comment id " + id
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.add = async function (body) {
    let result = Result;
    try {
        let comment = await CommentModel.create(body);
        result.code = 200;
        result.data = comment
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.remove = async function (idcomment) {
    let result = Result;
    try {
        let comment = await CommentModel.findByIdAndRemove({ _id: idcomment });
        result.code = comment ? 200 : 400;
        result.data = comment ? comment : null
        result.message = comment ? "OK" : "Not found comment id " + id
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}
