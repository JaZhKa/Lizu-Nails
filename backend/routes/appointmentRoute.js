const express = require('express');
const {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', getAppointments);

router.get('/:id', getAppointment);

router.post('/', createAppointment);

router.patch('/:id', updateAppointment);

router.delete('/:id', deleteAppointment);

module.exports = router;
