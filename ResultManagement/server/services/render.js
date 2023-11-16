const axios = require('axios');

exports.studentLogin = (request,response) => {
  response.render('student_login');
}

exports.fetchTeacherLogin = (request, response) => {
  response.render('teacher_login');
};

exports.submitTeacherLogin = (request, response) => {
  const { password } = request.body;
  const isPasswordCorrect = password === "admin";

  if (isPasswordCorrect) {
    return response.redirect('view_all');
  }

  return response.render('teacher_login', {
    error: "Please enter the correct password"
  });
};


exports.viewAllStudents = (request,response) => {
  response.render('view_all');
}

exports.homeRoute = (request,response) => {
  response.render('index');
}
exports.viewAllStudents = (req,res)=>{
   // make a get request to api/student
    axios.get("http://localhost:3000/api/student")
      .then(function(response){
        console.log(response.data)
        res.render('view_all',{student:response.data});
      })
      .catch(err=>{
        res.send(err);
      })
}

exports.addStudent = (request,response)=>{
    response.render('add_student');
};

exports.updateResult = (request,response)=>{
    axios.get('http://localhost:3000/api/student',{params: {roll:request.query.roll}})
      .then(function(studentData){
         response.render("update_result",{student:studentData.data})
      })
      .catch(err=>{
        response.send(err);
      })
};
