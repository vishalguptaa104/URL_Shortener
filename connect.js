const mongoose = require('mongoose')

const connectDB = async (url) => {
    try {
        console.log("DB connected!");
        return await mongoose.connect(url)
    } catch (error) {
        console.log("not connected");
    }
}

module.exports = { connectDB }
