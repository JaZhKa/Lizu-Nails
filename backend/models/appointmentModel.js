const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      require: true,
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
    scheduleId: {
      type: Schema.Types.ObjectId,
      ref: 'Schedule',
    },
    isConfirm: {
      type: Boolean,
      default: false,
      require: true,
    },
    totalDuration: {
      type: Number,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
