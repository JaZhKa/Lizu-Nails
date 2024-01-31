const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    masterId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
