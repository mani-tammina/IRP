var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    _id: Number,
    jobID: Number,
    candidateID: Number,
    status: String,
});

module.exports = mongoose.model(
    'applications', applicationSchema, 'applications');