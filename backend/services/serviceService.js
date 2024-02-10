const BaseService = require('./baseService');
const Service = require('../models/serviceModel');

class ServiceService extends BaseService {
  constructor() {
    super(Service);
  }
}

module.exports = ServiceService;