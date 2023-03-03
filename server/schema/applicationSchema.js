var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    jobid:String,
    candidateid:String,
  experience: String,
  ctccurrent: String,
  ctcexpected: String,
  relocate: String,
  noticeperiod: String,
  jobtype: String,
  skills: String,
  status: String,
});

module.exports = mongoose.model(
    'applications', applicationSchema, 'applications');