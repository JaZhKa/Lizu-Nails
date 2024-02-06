const mongoose = require('mongoose');
const Course = require('../models/courseModel');

const getCourses = async (req, res) => {
  const courses = await Course.find({});

  res.status(200).json(courses);
};

const getCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such course' });
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: 'No such course' });
  }

  res.status(200).json(course);
};

const createCourse = async (req, res) => {
  const {
    title,
    price,
    description,
    courseType,
    teacherId,
    docTitle,
    content,
    docFile,
    vidTitle,
    vidDescription,
    duration,
    vidFile,
  } = req.body;

  try {
    const course = await Course.create({
      title,
      price,
      description,
      courseType,
      teacherId,
      materials: {
        documents: {
          docTitle,
          content,
          docFile,
        },
        videos: {
          vidTitle,
          vidDescription,
          duration,
          vidFile,
        },
      },
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such course' });
  }

  const course = await Course.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(400).json({ error: 'No such course' });
  }

  res.status(200).json(course);
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such course' });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: 'No such course' });
  }

  res.status(200).json(course);
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
