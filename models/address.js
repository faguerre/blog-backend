const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _Address = new Schema({
    id: false,
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
        lat: String,
        lng: String
    }
})

module.exports = mongoose.model("Address", _Address);