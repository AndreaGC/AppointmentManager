
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



      res.status(200).json(newAppointment);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


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
      // Buscar las citas donde patientUserId sea igual al ID del usuario
      const appointments = await Appointment.find({ patientUserId: userId });

      if (!appointments) {
          return res.status(404).json({ message: 'Appointments not found for this user' });
      }

      // Retornar las citas encontradas
      res.status(200).json(appointments);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//Modificar una cita
exports.updateAppointment = async (req, res) => {
  const { id, appointmentId } = req.params; // ID del paciente y de la cita a actualizar
  const updates = req.body; // Datos actualizados de la cita

  try {
    // Verificar si el paciente existe
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Verificar si la cita existe en la colección de citas
    const existingAppointment = await Appointment.findById(appointmentId);
    if (!existingAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Verificar que la cita pertenezca al paciente específico
    if (existingAppointment.patientUserId.toString() !== id) {
      return res.status(404).json({ message: 'Appointment not found for this patient' });
    }

    // Actualizar la cita en la colección de citas
    const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, updates, { new: true });

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Eliminar una cita
exports.deleteAppointment = async (req, res) => {
  const { id, appointmentId } = req.params; // ID del paciente y de la cita a eliminar

  try {
    // Verificar si el paciente existe
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Verificar si la cita existe y pertenece al paciente
    const appointment = await Appointment.findOne({ _id: appointmentId, patientUserId: id });
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Eliminar la cita de la colección de citas
    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};