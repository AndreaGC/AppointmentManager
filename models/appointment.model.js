const mongoose = require('mongoose');
const PatientUser = require('./patients.model.js').schema;
const TypeAppointment = require ('./typeAppointment.model.js').schema;

const AppointmentSchema = new mongoose.Schema({
    patientUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'PatientUser', required: true },
    typeAppointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeAppointment', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    doctor: { type: String, required: true },
    location: { type: String, required: true },
    details: String,
    status: String
});

const Appointment = mongoose.model('appointments', AppointmentSchema);
module.exports = Appointment;
