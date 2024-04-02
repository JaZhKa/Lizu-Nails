const express = require('express');
const BaseRouter = require('./baseRouter');
const UserController = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

class UserRouter extends BaseRouter {
  constructor() {
    super(UserController);
    this.router = express.Router();
  }

  signUp(path, handler) {
    this.router.post(path, handler.bind(UserController));
  }

  signIn(path, handler) {
    this.router.post(path, handler.bind(UserController));
  }

  setupRoutes() {
    this.signUp('/signup', this.controller.singUp);
    this.signIn('/signin', this.controller.logIn);
    this.router.use(requireAuth);
    this.getAll('/', this.controller.getAll);
    this.getOne('/:id', this.controller.getOne);
    this.post('/', this.controller.create);
    this.patch('/:id', this.controller.update);
    this.delete('/:id', this.controller.delete);
  }
}

module.exports = UserRouter;
