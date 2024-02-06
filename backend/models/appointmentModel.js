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
      type:Schema.Types.ObjectId,
      ref: 'Schedule'
    },
    isConfirm: {
      type: Boolean,
      default: false,
      require: true,
    },
    totalDuration: {
      type: Number,
    },
    services: {
      serviceType: {
        type: String,
        enum: ['Маникюр', 'Педикюр'],
        require: true,
      },
      serviceTitle: {
        type: String,
        require: true,
      },
      serviceDescription: {
        type: String,
      },
      servicePrice: {
        type: Number,
        require: true,
      },
      serviceDuration: {
        type: Number,
      },
      additionalService: {
        addServiceType: {
          type: String,
        },
        addServiceTitle: {
          type: String,
          require: true,
        },
        addServiceDescription: {
          type: String,
        },
        addServicePrice: {
          type: Number,
          require: true,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
