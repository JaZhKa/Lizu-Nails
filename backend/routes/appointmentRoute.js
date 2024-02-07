const express = require('express');
const AppointmentController = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', AppointmentController.getAll);

router.get('/:id', AppointmentController.getOne);

router.post('/', AppointmentController.create);

router.patch('/:id', AppointmentController.update);

router.delete('/:id', AppointmentController.delete);

module.exports = router;
