const { default: mongoose } = require('mongoose');
const Nail = require('../models/nailModel');

const getNails = async (req, res) => {
  const nails = await Nail.find({});

  res.status(200).json(nails);
};

const getNail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such nail' });
  }

  const nail = await Nail.findById(id);

  if (!nail) {
    return res.status(404).json({ error: 'No such nail' });
  }

  res.status(200).json(nail);
};

const createNail = async (req, res) => {
  const { title, length, price } = req.body;
  try {
    const nail = await Nail.create({ title, length, price });
    res.status(200).json(nail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such nail' });
  }

  const nail = await Nail.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!nail) {
    return res.status(400).json({ error: 'No such nail' });
  }

  res.status(200).json(nail);
};

const deleteNail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such nail' });
  }

  const nail = await Nail.findOneAndDelete({ _id: id });

  if (!nail) {
    return res.status(400).json({ error: 'No such nail' });
  }

  res.status(200).json(nail);
};

module.exports = {
  getNails,
  getNail,
  createNail,
  updateNail,
  deleteNail,
};
