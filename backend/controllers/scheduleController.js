const mongoose = require('mongoose');
const Schedule = require('../models/scheduleModel');

const getSchedules = async (req, res) => {
  const schedules = await Schedule.find({}).populate('masterId').exec();

  res.status(200).json(schedules);
};

const getSchedule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Schedule is no exist' });
  }

  const schedule = await Schedule.findById(id);

  if (!schedule) {
    return res.status(404).json({ error: 'Schedule is no exist' });
  }

  res.status(200).json(schedule);
};

const createSchedule = async (req, res) => {
  const { start, masterId } = req.body;

  try {
    const schedule = await Schedule.create({
      start,
      masterId,
    });
    res.status(200).json(schedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSchedule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Schedule is no exist' });
  }

  const schedule = await Schedule.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!schedule) {
    return res.status(400).json({ error: 'Schedule is no exist' });
  }

  res.status(200).json(schedule);
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Schedule is no exist' });
  }

  const schedule = await Schedule.findOneAndDelete({ _id: id });

  if (!schedule) {
    return res.status(400).json({ error: 'Schedule is no exist' });
  }

  res.status(200).json(schedule);
};

module.exports = {
  getSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
