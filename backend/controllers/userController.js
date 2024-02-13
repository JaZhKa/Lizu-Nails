const BaseController = require('./baseController');
const UserService = require('../services/userService');

class UserController extends BaseController {
  constructor() {
    super(new UserService());
  }

  async singUp(req, res) {
    const data = req.body;
    try {
      const user = await this.service.signUp(data);
      res.status(200).json({email: user.user.email, token: user.token});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async logIn(req, res) {
    const data = req.body;
    try {
      const user = await this.service.logIn(data.email, data.password);
      res.status(200).json({ user: user.user, token: user.token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
