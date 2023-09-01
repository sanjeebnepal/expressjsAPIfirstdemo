const mongoose = require('mongoose')


const connectDB = (uri) => {
    console.log("connectdb from connect.js")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
};

module.exports = connectDB;