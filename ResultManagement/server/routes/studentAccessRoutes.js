const express = require('express');
const studentRoutes = express.Router();

const services = require('../services/render')
const controller = require('../controller/studentAccessController')

//get
studentRoutes.get('/student_login', services.studentLogin);

//post
studentRoutes.post('/student_login',controller.find);

module.exports = studentRoutes; 