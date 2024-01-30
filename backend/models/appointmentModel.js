const mongoose = require('mongoose');

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  price: {
    type:Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Appointment', appointmentSchema)