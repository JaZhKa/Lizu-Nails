const { default: mongoose } = require('mongoose');
const Service = require('../models/serviceModel');

const getServices = async (req, res) => {
  const services = await Service.find({});

  res.status(200).json(services);
};

const getService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findById(id);

  if (!service) {
    return res.status(404).json({ error: 'No such service' });
  }

  res.status(200).json(service);
};

const createService = async (req, res) => {
  const {
    title,
    serviceType,
    description,
    price,
    duration,
    addServiceType,
    addServiceTitle,
    addServiceDescription,
    addServicePrice,
  } = req.body;
  try {
    const service = await Service.create({
      title,
      serviceType,
      description,
      price,
      duration,
      additionalService: {
        addServiceType,
        addServiceTitle,
        addServiceDescription,
        addServicePrice,
      },
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!service) {
    return res.status(400).json({ error: 'No such service' });
  }

  res.status(200).json(service);
};

const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findOneAndDelete({ _id: id });

  if (!service) {
    return res.status(400).json({ error: 'No such service' });
  }

  res.status(200).json(service);
};

module.exports = {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
};
