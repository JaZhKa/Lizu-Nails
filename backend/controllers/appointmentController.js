const BaseController = require('./baseController');
const AppointmentService = require('../services/appointmentService');

class AppointmentController extends BaseController {
  constructor(appointmentService) {
    super(new AppointmentService());
    this.service = appointmentService;
  }
}
module.exports = AppointmentController;

module.exports = AppointmentController;

// const AppointmentService = require('../services/appointmentService');

// class AppointmentController {
//   async getAll(req, res) {
//     try {
//       const appointments = await AppointmentService.getAll();
//       res.status(200).json(appointments);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   async getOne(req, res) {
//     try {
//       const appointment = await AppointmentService.getOne(req.params.id);
//       if (!appointment) {
//         return res.status(404).json({ error: 'No such appointment' });
//       }
//       return res.json(appointment);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   async create(req, res) {
//     try {
//       const appointment = await AppointmentService.create(req.body);
//       res.status(200).json(appointment);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       const {id} = req.params;
//       const updatedAppointment = await AppointmentService.update(req.body, id);
//       if (!updatedAppointment) {
//         return res.status(400).json({ error: 'No such appointment' });
//       }
//       return res.json(updatedAppointment);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const appointment = await AppointmentService.delete(req.params.id);
//       if (!appointment) {
//         return res.status(400).json({ error: 'No such appointment' });
//       }
//       return res.json(appointment);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// }

// module.exports = new AppointmentController();
