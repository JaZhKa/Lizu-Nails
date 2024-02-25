const BaseRouter = require('./baseRouter');
const CourseController = require('../controllers/courseController');
const requireAuth = require('../middleware/requireAuth');

class CourseRouter extends BaseRouter {
  constructor() {
    super(CourseController);
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

module.exports = CourseRouter;