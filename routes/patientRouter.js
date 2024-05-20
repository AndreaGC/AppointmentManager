// src/routes/PatientRoutes.js
const express = require('express');
const patientController = require('../controllers/appointmentController');



const router = express.Router();

router.post('/patients', patientController.createPatient);
/*router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/:id/appointments', appointmentController.addAppointment);

*/
module.exports = router;




