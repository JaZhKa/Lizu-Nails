const express = require('express');
const AppointmentController = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', new AppointmentController().getAll);

router.get('/:id', new AppointmentController().getOne);

router.post('/', new AppointmentController().create);

router.patch('/:id', new AppointmentController().update);

router.delete('/:id', new AppointmentController().delete);

module.exports = router;
