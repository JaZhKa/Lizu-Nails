const express = require('express');
const { singupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/singup', singupUser);

router.post('/login', loginUser );

module.exports = router;
