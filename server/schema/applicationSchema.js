var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    jobid: String,
    candidateId: String,
    experience: String,
    relocate: String,
    expectedCTC: String,
    noticePeriod: String,
    status: String,
});

module.exports = mongoose.model(
    'applications', applicationSchema, 'applications');