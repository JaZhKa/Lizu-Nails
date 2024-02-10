const BaseService = require('./baseService');
const User = require('../models/userModel');

class UserService extends BaseService {
  constructor() {
    super(User);
  }
}

module.exports = new UserService();