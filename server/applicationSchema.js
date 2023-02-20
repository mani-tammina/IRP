var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    type: String,
    email: String,
    password: String
});

module.exports = mongoose.model(
    'applications', applicationSchema, 'applications');