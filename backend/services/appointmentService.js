const BaseService = require('./baseService');
const Appointment = require('../models/appointmentModel');
const mongoose = require('mongoose');

class AppointmentService extends BaseService {
  constructor() {
    super(Appointment);
  }

  async getOne(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    try {
      return await this.model.findById(id).populate(['customerId', 'masterId', 'scheduleId', 'service']);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentService;
