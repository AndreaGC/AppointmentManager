// src/routes/PatientRoutes.js
const express = require('express');
const patientController = require('../controllers/appointmentController');



const router = express.Router();

router.post('/patients', patientController.createPatient);
router.post('/patients/:id/appointments', patientController.addAppointment);
router.get('/patients/:id/appointments', patientController.getAppointmentsByUser);

/*router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
*/

module.exports = router;




