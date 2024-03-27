const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'Minimum password length is 6 characters'],
    },
    role: {
      type: String,
      enum: ['admin', 'customer', 'master'],
      default: 'customer',
      require: true,
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
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
    img: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
