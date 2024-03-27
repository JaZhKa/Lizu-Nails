const BaseService = require('./baseService');
const Service = require('../models/serviceModel');

class ServiceService extends BaseService {
  constructor() {
    super(Service);
  }

  async getAll() {
    try {
      return await this.model.find({}).populate(['master']);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ServiceService;