const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    date: String
})

module.exports = mongoose.model('User', userSchema)