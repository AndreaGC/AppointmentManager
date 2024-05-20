const mongoose = require('mongoose');

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
