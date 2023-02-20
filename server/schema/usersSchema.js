var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    _id: Number,
    username: String,
    type: String,
    email: String,
    password: String
});

module.exports = mongoose.model(
    'user', usersSchema, 'users');