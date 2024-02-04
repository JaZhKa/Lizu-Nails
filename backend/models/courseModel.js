const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    courseType: {
      type: String,
      require: true,
      enum: ['Для начинающих', 'Для профессионалов'],
    },
    soldCount: {
      type: Number,
      require: true,
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    materials: {
      documents: {
        docTitle: {
          type: String,
          require: true,
        },
        content: {
          type: String,
          require: true,
        },
        docDate: {
          type: Date,
          default: Date.now,
        },
        docFile: String,
      },
      videos: {
        vidTitle: {
          type: String,
          require: true,
        },
        vidDescription: {
          type: String,
          require: true,
        },
        duration: {
          type: Number,
          require: true,
        },
        vidDate: {
          type: Date,
          default: Date.now,
        },
        vidFile: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
