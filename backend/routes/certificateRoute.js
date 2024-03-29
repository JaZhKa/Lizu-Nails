const BaseRouter = require('./baseRouter');
const CertificateController = require('../controllers/certificateController');
const requireAuth = require('../middleware/requireAuth');


class CertificateRouter extends BaseRouter {
  constructor() {
    super(CertificateController);
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

module.exports = CertificateRouter;