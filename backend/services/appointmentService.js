const BaseService = require('./baseService');
const Appointment = require('../models/appointmentModel');

class AppointmentService extends BaseService {
  constructor() {
    super(Appointment);
  }
}

module.exports = new AppointmentService();
