const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificateSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
      require: true,
    },
    expirationDate: {
      type: Date,
      default: function () {
        const date = new Date();
        const expirationDate = new Date(date.valueOf());
        return expirationDate.setMonth(date.getMonth() + 3);
      },
    },
    service: [
      {
        type: String,
        require: true,
      },
    ],
    price: {
      type: Number,
      require: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Certificate', certificateSchema);
