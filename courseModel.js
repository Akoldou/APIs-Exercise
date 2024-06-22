// models/courseModel.js

const db = require('../config/database');

const Course = {
  getCoursesByStudentName: (studentName, callback) => {
    const query = `
      SELECT courses.name
      FROM students
      JOIN registrations ON students.id = registrations.student_id
      JOIN courses ON courses.id = registrations.course_id
      WHERE students.name = ?
    `;
    db.query(query, [studentName], callback);
  },
  // Add more methods as needed
};

module.exports = Course;
