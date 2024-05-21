const express = require('express');
const patientController = require('../controllers/appointmentController');

const router = express.Router();

router.post('/patients', patientController.createPatient);
router.post('/patients/:id/appointments', patientController.addAppointment);
router.get('/patients/:id/appointments', patientController.getAppointmentsByUser);
router.put('/patients/:id/appointments/:appointmentId', patientController.updateAppointment);
router.delete('/patients/:id/appointments/:appointmentId', patientController.deleteAppointment);



module.exports = router;




