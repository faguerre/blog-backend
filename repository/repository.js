const mongoose = require('mongoose');

module.exports.initRepository = async function () {
    try {
        const env = process.env.ENV;
        const _config = require(`../config/${env}`)
        await mongoose.connect(_config.url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("CONNECTION OK")
    } catch (error) {
        console.log(error)
    }
}


module.exports.closeDataBase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}