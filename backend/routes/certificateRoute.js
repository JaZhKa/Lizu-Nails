const express = require('express');
const CertificateController = require('../controllers/certificateController');

const router = express.Router();

router.get('/', (req, res) => CertificateController.getAll(req, res));
router.get('/:id', (req, res) => CertificateController.getOne(req, res));
router.post('/', (req, res) => CertificateController.create(req, res));
router.patch('/:id', (req, res) => CertificateController.update(req, res));
router.delete('/:id', (req, res) => CertificateController.delete(req, res));

module.exports = router;