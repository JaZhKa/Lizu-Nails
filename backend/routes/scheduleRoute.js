const express = require('express');
const {
  getSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require('../controllers/scheduleController');

const router = express.Router();

router.get('/', getSchedules);

router.get('/:id', getSchedule);

router.post('/', createSchedule);

router.patch('/:id', updateSchedule);

router.delete('/:id', deleteSchedule);

module.exports = router;
