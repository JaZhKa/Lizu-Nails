const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  serviceType: {
    type: String,
    enum: ['Маникюр', 'Педикюр'],
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  duration: {
    type: Number,
  },
  additionalService: {
    addServiceType: {
      type: String,
    },
    addServiceTitle: {
      type: String,
    },
    addServiceDescription: {
      type: String,
    },
    addServicePrice: {
      type: Number,
    },
  },
})

module.exports = mongoose.model('Service', serviceSchema);