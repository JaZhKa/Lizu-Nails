const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

const router = express.Router();

router.get('/', getCourses);

router.get('/:id', getCourse);

router.post('/', createCourse);

router.patch('/:id', updateCourse);

router.delete('/:id', deleteCourse);

module.exports = router;
