const UserModel = require('../models/user')
const PostModel = require('../models/post')
const logger = require('../common/logger')
const Result = require('../models/DTO/obj_result')

module.exports.get = async function () {
    let result = Result;
    try {
        let users = await UserModel.find();
        result.code = 200;
        result.data = users
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.getById = async function (id) {
    let result = Result;
    try {
        let user = await UserModel.findById(id);
        result.code = user ? 200 : 400;
        result.data = user ? user : null
        result.message = user ? "OK" : "Not found user id " + id
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.add = async function (body) {
    let result = Result;
    try {
        let user = await UserModel.create(body);
        result.code = 200;
        result.data = user
        result.message = "OK"
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports.addPost = async function (body, id) {
    let result = Result;
    try {
        let exist_user = await UserModel.findById(id);
        if (exist_user) {
            let add_post = await PostModel.create(body)
            let update_model = await UserModel.updateOne({
                _id: id,
            }, {
                $push: {
                    posts: add_post,
                },
            });
            result.code = 200;
            result.data = exist_user
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