const BaseRouter = require('./baseRouter');
const ServiceController = require('../controllers/serviceController');
const requireAuth = require('../middleware/requireAuth');

class ServiceRouter extends BaseRouter {
  constructor() {
    super(ServiceController);
  }

  setupRoutes() {
    this.router.use(requireAuth);
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.post('/', this.controller.create);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = ServiceRouter;