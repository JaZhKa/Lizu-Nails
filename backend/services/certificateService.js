const BaseService = require('./baseService');
const Certificate = require('../models/certificateModel');

class CertificateService extends BaseService {
  constructor() {
    super(Certificate);
  }
}

module.exports = CertificateService;
