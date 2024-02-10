const BaseService = require('./baseService');
const Course = require('../models/courseModel');

class CourseService extends BaseService {
  constructor() {
    super(Course);
  }
}

module.exports = new CourseService();