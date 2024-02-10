const express = require('express');
const ScheduleController = require('../controllers/scheduleController');

const router = express.Router();

router.get('/', (req, res) => ScheduleController.getAll(req, res));
router.get('/:id', (req, res) => ScheduleController.getOne(req, res));
router.post('/', (req, res) => ScheduleController.create(req, res));
router.patch('/:id', (req, res) => ScheduleController.update(req, res));
router.delete('/:id', (req, res) => ScheduleController.delete(req, res));

module.exports = router;
