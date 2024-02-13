const BaseService = require('./baseService');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

class UserService extends BaseService {
  constructor() {
    super(User);
  }

  async signUp(data) {
    if (!data.email || !data.password) {
      throw Error('All fields must be filled');
    }
    if (!validator.isEmail(data.email)) {
      throw Error('Email not valid');
    }
    if (data.password.length < 6) {
      throw Error('Password is too short');
    }

    const exists = await User.findOne({ email: data.email });

    if (exists) {
      throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);
    data.password = hash;
    const user = await this.create(data);
    const token = this._createToken(user._id);

    return { user, token };
  }

  async logIn(email, password) {
    if (!email || !password) {
      throw Error('All fields must be filled');
    }

    const user = await User.findOne({email: email});

    if (!user) {
      throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error('Incorrect password');
    }

    const token = this._createToken(user._id);

    return {user, token};
  }

  _createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '30d' });
  };
}

module.exports = UserService;
