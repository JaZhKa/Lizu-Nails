const express = require('express');

const router = express.Router();

class BaseRouter {
  constructor(controller) {
    this.controller = controller;
  }
  async getAll() {
    return router.get('/', this.controller.getAll.bind(this.controller));
  }

  async getOne() {
    return router.get('/:id', this.controller.getOne);
  }

  async create() {
    return router.post('/', this.controller.create);
  }

  async update() {
    return router.patch('/:id', this.controller.update);
  }

  async delete() {
    return router.delete('/:id', this.controller.delete);
  }
}

module.exports = BaseRouter;
