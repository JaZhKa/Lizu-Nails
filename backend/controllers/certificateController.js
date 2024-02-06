const mongoose = require('mongoose');
const Certificate = require('../models/certificateModel');

const getCertificates = async (req, res) => {
  const certificates = await Certificate.find({}).populate('customerId').exec();

  res.status(200).json(certificates);
};

const getCertificate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Certificate is no exist' });
  }

  const certificate = await Certificate.findById(id);

  if (!certificate) {
    return res.status(404).json({ error: 'Certificate is no exist' });
  }

  res.status(200).json(certificate);
};

const createCertificate = async (req, res) => {
  const { title, service, price, castomerId } = req.body;

  try {
    const certificate = await Certificate.create({
      title,
      service,
      price,
      castomerId,
    });
    res.status(200).json(certificate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCertificate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Certificate is no exist' });
  }

  const certificate = await Certificate.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!certificate) {
    return res.status(400).json({ error: 'Certificate is no exist' });
  }

  res.status(200).json(certificate);
};

const deleteCertificate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Certificate is no exist' });
  }

  const certificate = await Certificate.findOneAndDelete({ _id: id });

  if (!certificate) {
    return res.status(400).json({ error: 'Certificate is no exist' });
  }

  res.status(200).json(certificate);
};

module.exports = {
  getCertificates,
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
};
