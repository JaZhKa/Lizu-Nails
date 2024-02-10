const BaseService = require('./baseService');
const Schedule = require('../models/scheduleModel');

class ScheduleService extends BaseService {
  constructor() {
    super(Schedule);
  }
}

module.exports = ScheduleService;