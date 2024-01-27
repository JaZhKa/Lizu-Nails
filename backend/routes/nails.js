const express = require('express');
const Nail = require('../models/nailModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mssg: 'Get all nails' });
});

router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single nail' });
});

router.post('/', async (req, res) => {
  const { title, length, price } = req.body;
  try {
    const nail = await Nail.create({ title, length, price });
    res.status(200).json(nail);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a nail' });
});

router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a nail' });
});

module.exports = router;
