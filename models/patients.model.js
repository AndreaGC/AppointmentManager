const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  date: Date,
  time: String,
  doctor: String,
  location: String,
  details: String,
  status: String
});

const PatientUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  appointments: [AppointmentSchema]
});

const PatientUser = mongoose.model('patients', PatientUserSchema);
module.exports = PatientUser;