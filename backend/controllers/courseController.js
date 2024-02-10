const BaseController = require('./baseController');
const CourseService = require('../services/courseService');

class CourseController extends BaseController {
  constructor() {
    super(new CourseService());
  }
}

module.exports = new CourseController();