const BaseController = require('./baseController');
const ScheduleService = require('../services/scheduleService');

class ScheduleController extends BaseController {
  constructor() {
    super(new ScheduleService());
  }
}

module.exports = new ScheduleController();