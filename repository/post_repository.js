module.exports.UserRepository = async function () {
    const Repository = require('./repository');
    const post_repository = Repository('post');
    return post_repository;
}