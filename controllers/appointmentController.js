/*const PatientUser = require('../models/patientUser');

exports.addAppointment = async (req, res) => {
    try {
        const patient = await PatientUser.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        patient.appointments.push(req.body);
        await patient.save();

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};*/
//-----------------------------------------------------------------------------------------
// src/controllers/userController.js
const Patient = require('../models/patients.model');

// Create a new user
exports.createPatient = async (req, res) => {
    try{
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
/*
// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/