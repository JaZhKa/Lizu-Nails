const express = require('express');

class BaseRouter {
  constructor(controller) {
    this.controller = controller;
    this.router = express.Router();
  }

  getAll(path, handler) {
    this.router.get(path, handler.bind(this.controller));
  }

  getOne(path, handler) {
    this.router.get(`${path}`, handler.bind(this.controller));
  }

  post(path, handler) {
    this.router.post(path, handler.bind(this.controller));
  }

  patch(path, handler) {
    this.router.patch(`${path}`, handler.bind(this.controller));
  }

  delete(path, handler) {
    this.router.delete(`${path}`, handler.bind(this.controller));
  }
}

module.exports = BaseRouter;
