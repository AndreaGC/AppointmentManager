const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        //match: /^[A-Za-z0-9]{8,}$/
    }
});

const Patient = mongoose.model('patients', patientSchema);
module.exports = Patient;