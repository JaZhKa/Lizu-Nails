require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routes/userRoute');
const AppointmentRouter = require('./routes/appointmentRoute');
const CertificateRouter = require('./routes/certificateRoute');
const CourseRouter = require('./routes/courseRoute');
const ScheduleRouter = require('./routes/scheduleRoute');
const ServiceRouter = require('./routes/serviceRoute');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const userRouter = new UserRouter();
userRouter.setupRoutes();
app.use('/api/user', userRouter.router);

const appointmentRouter = new AppointmentRouter();
appointmentRouter.setupRoutes();
app.use('/api/appointment', appointmentRouter.router);

const certificateRouter = new CertificateRouter();
certificateRouter.setupRoutes();
app.use('/api/certificate', certificateRouter.router);

const courseRouter = new CourseRouter();
courseRouter.setupRoutes();
app.use('/api/course', courseRouter.router);

const scheduleRouter = new ScheduleRouter();
scheduleRouter.setupRoutes();
app.use('/api/schedule', scheduleRouter.router);

const serviceRouter = new ServiceRouter();
serviceRouter.setupRoutes();
app.use('/api/service', serviceRouter.router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
