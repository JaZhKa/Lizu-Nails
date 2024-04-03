const BaseRouter = require('./baseRouter');
const AppointmentController = require('../controllers/appointmentController');
const requireAuth = require('../middleware/requireAuth');

class AppointmentRouter extends BaseRouter {
  constructor() {
    super(AppointmentController);
  }

  setupRoutes() {
    this.post('/', this.controller.create);
    this.router.use(requireAuth);
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = AppointmentRouter;
