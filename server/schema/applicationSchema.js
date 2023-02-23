var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    jobstitle: String,
    jobDescription: String,
    experience: String,
    CTCExpected: String,
    Relocate: String,
    NoticePeriod: String,
    JobType: String,
    description: String
});

module.exports = mongoose.model(
    'applications', applicationSchema, 'applications');