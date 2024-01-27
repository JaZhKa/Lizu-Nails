const express = require('express');
const {
  createNail,
  getNails,
  getNail,
  updateNail,
  deleteNail,
} = require('../controllers/nailController');

const router = express.Router();

router.get('/', getNails);

router.get('/:id', getNail);

router.post('/', createNail);

router.patch('/:id', updateNail);

router.delete('/:id', deleteNail);

module.exports = router;
