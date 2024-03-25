const BaseService = require('./baseService');
const Appointment = require('../models/appointmentModel');
const mongoose = require('mongoose');

class AppointmentService extends BaseService {
  constructor() {
    super(Appointment);
  }

  async getAll(page, id) {
    try {
      const pageSize = 10;
      if (id) {
        return await this.model
          .find({ customerId: id })
          .populate(['masterId', 'scheduleId', 'service'])
          .sort({ createdAt: -1 });
      }
      return await this.model
        .find({})
        .populate(['customerId', 'masterId', 'scheduleId', 'service'])
        .sort({ createdAt: -1 })
        .limit(pageSize)
        .skip(page * pageSize);
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    try {
      return await this.model
        .findById(id)
        .populate(['customerId', 'masterId', 'scheduleId', 'service']);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentService;
