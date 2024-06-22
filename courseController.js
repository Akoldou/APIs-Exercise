// controllers/courseController.js

const Course = require('../models/courseModel');

const courseController = {
  getCoursesByStudentName: (req, res) => {
    const studentName = req.params.studentName;
    Course.getCoursesByStudentName(studentName, (err, courses) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(courses);
    });
  },
  // Add more controller methods as needed
};

module.exports = courseController;
