
module.exports.initRepository = async function () {
    const mongoose = require('mongoose');
    const env = process.env.ENV;
    const _config = require(`../config/${env}`)
    const PostModel = require('../models/post.js').Post;
    const user_model = require('../models/user.js');

    connection = await mongoose.connect(_config.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log("ERROR")
            console.error(err);
            return;
        } else {
            console.log("CONNECTION OK")
        }
    })
    console.log("CONNECTION OK 2")
}
