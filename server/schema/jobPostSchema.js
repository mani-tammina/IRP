var mongoose = require('mongoose');

var jobPostsSchema = new mongoose.Schema({
    userId: String,
    jobtitle: String,
    jobtype: String,
    skills: String,
    qualification: String,
    positions: String,
    experience: String,
    ctc: String,
    location: String,
    joinperiod: String,
    status: String
});

module.exports = mongoose.model(
    'jobs', jobPostsSchema, 'jobs');