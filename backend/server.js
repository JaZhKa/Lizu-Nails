require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const nailsRoutes = require('./routes/nails');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/nails', nailsRoutes);

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
