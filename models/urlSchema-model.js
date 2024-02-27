const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId : { //xyz
        type: String,
        required: true,
        unique : true,
    },
    redirectURL : { //g.com
        type: String,
        required : true
    },
    visitHistory : [{
        timeStamp : {
            type: Number
        }
    }],
}, {
    timestamps: true
})

const URL = mongoose.model("url",urlSchema)

module.exports = URL