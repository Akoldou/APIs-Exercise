// routes/courseRoutes.js

const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Route to get courses by student name
router.get('/courses/:studentName', courseController.getCoursesByStudentName);

module.exports = router;
