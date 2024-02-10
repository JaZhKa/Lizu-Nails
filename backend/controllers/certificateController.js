const BaseController = require('./baseController');
const CertificateService = require('../services/certificateService');

class CertificateController extends BaseController {
  constructor() {
    super(new CertificateService());
  }
}

module.exports = new CertificateController();