const express = require('express');
const {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');

const router = express.Router();

router.get('/', getServices);

router.get('/:id', getService);

router.post('/', createService);

router.patch('/:id', updateService);

router.delete('/:id', deleteService);

module.exports = router;
