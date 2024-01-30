const { default: mongoose } = require('mongoose');
const Appointment = require('../models/appointmentModel');

const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({});

  res.status(200).json(appointments);
};

const getAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such appointment' });
  }

  const appointment = await Appointment.findById(id);

  if (!appointment) {
    return res.status(404).json({ error: 'No such appointment' });
  }

  res.status(200).json(appointment);
};

const createAppointment = async (req, res) => {
  const { title, length, price } = req.body;
  try {
    const appointment = await Appointment.create({ title, length, price });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such appointment' });
  }

  const appointment = await Appointment.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!appointment) {
    return res.status(400).json({ error: 'No such appointment' });
  }

  res.status(200).json(appointment);
};

const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such appointment' });
  }

  const appointment = await Appointment.findOneAndDelete({ _id: id });

  if (!appointment) {
    return res.status(400).json({ error: 'No such appointment' });
  }

  res.status(200).json(appointment);
};

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
