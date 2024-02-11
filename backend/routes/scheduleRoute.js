const BaseRouter = require('./baseRouter');
const ScheduleController = require('../controllers/scheduleController');

class ScheduleRouter extends BaseRouter {
  constructor() {
    super(ScheduleController);
  }

  setupRoutes() {
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.post('/', this.controller.create);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = ScheduleRouter;
