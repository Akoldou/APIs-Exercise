// models/registrationModel.js

const db = require('../config/database');

const Registration = {
  // Add methods as needed, for example, to register a student for a course
  registerStudentForCourse: (studentId, courseId, callback) => {
    const query = 'INSERT INTO registrations (student_id, course_id) VALUES (?, ?)';
    db.query(query, [studentId, courseId], callback);
  },
  // More methods to interact with the registrations table can be added here
};

module.exports = Registration;
