const express = require('express');
const teacherRoutes = express.Router();

const services = require('../services/render')
const controller = require('../controller/teacherAccessController')

//get
teacherRoutes.get('/teacher_login', services.fetchTeacherLogin);
//post
teacherRoutes.post('/teacher_login', services.submitTeacherLogin);
//get
teacherRoutes.get('/view_all', services.viewAllStudents);

// get 
teacherRoutes.get('/', services.homeRoute);

// GET / add-student
teacherRoutes.get('/add-student',services.addStudent);

// GET / update-result
teacherRoutes.get('/update-result', services.updateResult );


// API
teacherRoutes.post('/api/student',controller.create);
teacherRoutes.get('/api/student',controller.find);
teacherRoutes.put('/api/student/:roll',controller.update);
teacherRoutes.get('/delete-student/:id', controller.deleteStudent)


module.exports = teacherRoutes; 