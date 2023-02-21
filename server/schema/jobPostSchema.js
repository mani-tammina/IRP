var mongoose = require('mongoose');

var jobPostsSchema = new mongoose.Schema({
    jobtitle: String,
    jobdesc: String,
    jobtype: String,
    requirement: String,
    skills: String,
    experience: String,
    ctc: String,
    location: String,
    joinperiod: String,
    status: String
});

module.exports = mongoose.model(
    'jobs', jobPostsSchema, 'jobs');