const BaseRouter = require('./baseRouter');
const ServiceController = require('../controllers/serviceController');

class ServiceRouter extends BaseRouter {
  constructor() {
    super(ServiceController);
  }

  setupRoutes() {
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.post('/', this.controller.create);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = ServiceRouter;