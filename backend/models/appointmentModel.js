const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    totalPrice: {
      type: Number,
      require: true,
    },
    name: String,
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: '65ef380bdce05bbb9179819d'
    },
    masterId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true,
      default: '65cbac3e43752e6674ffb3ab',
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
    contacts: {
      phoneNumber: {
        type: String,
        maxlength: 13,
      },
      instagramNickname: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
