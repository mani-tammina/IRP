var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    type: String,
    password: String,
});

module.exports = mongoose.model(
    'users', usersSchema, 'users');