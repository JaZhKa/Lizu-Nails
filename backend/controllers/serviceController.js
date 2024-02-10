const BaseController = require('./baseController');
const ServiceService = require('../services/serviceService');

class ServiceController extends BaseController {
  constructor() {
    super(new ServiceService());
  }
}

module.exports = new ServiceController();