class BaseRouter {
  constructor(controller) {
    this.controller = controller;
  }

  setupRoutes(router) {
    router.get('/', this.controller.getAll);
    router.get('/:id', this.controller.getOne);
    router.post('/', this.controller.create);
    router.patch('/:id', this.controller.update);
    router.delete('/:id', this.controller.delete);
  }
}

module.exports = BaseRouter;
