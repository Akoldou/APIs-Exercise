// models/studentModel.js

const db = require('../config/database');

const Student = {
  getAll: (callback) => {
    db.query('SELECT * FROM students', callback);
  },
  // Add more methods as needed
};

module.exports = Student;
