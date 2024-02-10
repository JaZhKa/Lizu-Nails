const express = require('express');
const ServiceController = require('../controllers/serviceController');

const router = express.Router();

router.get('/', (req, res) => ServiceController.getAll(req, res));
router.get('/:id', (req, res) => ServiceController.getOne(req, res));
router.post('/', (req, res) => ServiceController.create(req, res));
router.patch('/:id', (req, res) => ServiceController.update(req, res));
router.delete('/:id', (req, res) => ServiceController.delete(req, res));

module.exports = router;
