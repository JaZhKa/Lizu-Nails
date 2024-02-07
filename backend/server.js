require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const appointmentRoutes = require('./routes/appointmentRoute');
const courseRoutes = require('./routes/courseRoute');
const scheduleRoutes = require('./routes/scheduleRoute');
const certificateRoutes = require('./routes/certificateRoute');
const serviceRoutes = require('./routes/serviceRoute');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/certificate', certificateRoutes);
app.use('/api/service', serviceRoutes);

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
