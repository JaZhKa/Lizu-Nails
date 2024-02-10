const express = require('express');
const CourseController = require('../controllers/courseController');

const router = express.Router();

router.get('/', (req, res) => CourseController.getAll(req, res));
router.get('/:id', (req, res) => CourseController.getOne(req, res));
router.post('/', (req, res) => CourseController.create(req, res));
router.patch('/:id', (req, res) => CourseController.update(req, res));
router.delete('/:id', (req, res) => CourseController.delete(req, res));

module.exports = router;