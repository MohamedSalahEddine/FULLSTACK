const mongoose = require("mongoose")

const schema_author = mongoose.Schema({
    name : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', schema_author )