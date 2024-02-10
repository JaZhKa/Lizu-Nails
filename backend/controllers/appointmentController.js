const BaseController = require('./baseController');
const AppointmentService = require('../services/appointmentService');

class AppointmentController extends BaseController {
  constructor() {
    super(new AppointmentService());
  }
}

module.exports = new AppointmentController();
