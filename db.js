const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://jahid:root@cluster1.x48qyq2.mongodb.net/hotel-booking'
mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('DB Connection failed')
})

connection.on('connected' , ()=>{
    console.log('DB Connection established')
})

module.exports = mongoose
