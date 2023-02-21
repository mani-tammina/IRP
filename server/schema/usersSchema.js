var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    username: String,
    type: String,
    email: String,
    password: String
});

module.exports = mongoose.model(
    'users', usersSchema, 'users');