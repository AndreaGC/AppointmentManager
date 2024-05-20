const mongoose = require('mongoose');

const TypeAppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    preparationInstructions: String
});

const TypeAppointment = mongoose.model('TypeAppointment', TypeAppointmentSchema);
module.exports = TypeAppointment;
