var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    type: String,
    email: String,
    password: String
});

module.exports = mongoose.model(
    'user', usersSchema, 'Users');