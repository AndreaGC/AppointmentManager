
const Patient = require('../models/patients.model');
const Appointment = require('../models/appointment.model');

exports.addAppointment = async (req, res) => {
  try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
      }

      //Verificar formato de fecha
      const date = new Date(req.body.date);
      if (isNaN(date.getTime())) {
          return res.status(400).json({ message: 'Invalid date format' });
      }

      // Crear un nuevo documento en la colección `appointments`
      const newAppointment = new Appointment({
          patientUserId: req.params.id,
          typeAppointmentId: req.body.typeAppointmentId,
          date: req.body.date,
          time: req.body.time,
          doctor: req.body.doctor,
          location: req.body.location,
          details: req.body.details,
          status: req.body.status
      });

      await newAppointment.save();

      // Añadir la referencia de la cita al paciente
      patient.appointments.push({
          appointmentId: newAppointment._id,
          date: req.body.date,
          time: req.body.time,
          doctor: req.body.doctor,
          location: req.body.location,
          details: req.body.details,
          status: req.body.status
      });

      await patient.save();

      res.status(200).json(patient);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//-----------------------------------------------------------------------------------------
// src/controllers/userController.js


// Create a new user
exports.createPatient = async (req, res) => {
    try{
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getAppointmentsByUser = async (req, res) => {
  const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL

  try {
      // Buscar al usuario por su ID
      const patient = await Patient.findById(userId).populate('appointments');

      if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
      }

      // Retornar las citas del usuario
      res.status(200).json(patient.appointments);
  } catch (error) {
      res.status(500).json({ message: error.message });
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