
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  instructor: String,
  description: String,
  status: String,
  duration: String,
  schedule: String,
  location: String,
  prerequisites: [String],
  syllabus: [String],
  enrollmentStatus: {
    type: String,
    enum: ['Open', 'Closed', 'Pending'], 
    default: 'Pending',
  },
});

module.exports = mongoose.model('Course', courseSchema);
