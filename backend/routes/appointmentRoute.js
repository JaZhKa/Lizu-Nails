const BaseRouter = require('./baseRouter');
const AppointmentController = require('../controllers/appointmentController');

class AppointmentRouter extends BaseRouter {
  constructor() {
    super(AppointmentController);
  }

  setupRoutes() {
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.post('/', this.controller.create);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = AppointmentRouter;
