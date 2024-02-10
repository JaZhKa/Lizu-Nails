const express = require('express');
const AppointmentController = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', (req, res) => AppointmentController.getAll(req, res));
router.get('/:id', (req, res) => AppointmentController.getOne(req, res));
router.post('/', (req, res) => AppointmentController.create(req, res));
router.patch('/:id', (req, res) => AppointmentController.update(req, res));
router.delete('/:id', (req, res) => AppointmentController.delete(req, res));

module.exports = router;


// const BaseRoute = require('./baseRoute');
// const AppointmentController = require('../controllers/appointmentController');

// class AppointmentRouter extends BaseRoute {
//   constructor() {
//     super(AppointmentController);
//   }
// }

// module.exports = new AppointmentRouter();
