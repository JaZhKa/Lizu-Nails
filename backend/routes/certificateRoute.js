const express = require('express');
const {
  getCertificates,
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} = require('../controllers/certificateController');

const router = express.Router();

router.get('/', getCertificates);

router.get('/:id', getCertificate);

router.post('/', createCertificate);

router.patch('/:id', updateCertificate);

router.delete('/:id', deleteCertificate);

module.exports = router;