var mongoose = require('mongoose');

var jobPostsSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    type: String,
    email: String,
    password: String
});

module.exports = mongoose.model(
    'jobs', jobPostsSchema, 'jobs');