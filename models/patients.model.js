const mongoose = require('mongoose');

const PatientUserSchema = new mongoose.Schema({
  firstName: {
     type: String, 
     required: true },
  lastName: { 
    type: String, 
    required: true },
  password: { 
    type: String,
     required: true },
  email: { 
    type: String, 
    required: true,
    unique: true },
});

const PatientUser = mongoose.model('patients', PatientUserSchema);
module.exports = PatientUser; 