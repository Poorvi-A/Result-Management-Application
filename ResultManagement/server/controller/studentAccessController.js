var Userdb = require('../model/model')

exports.find = (request, response) => {
    const { roll, name } = request.body;

    Userdb.findOne({ $and: [{ roll: roll }, { name: name }] })
        .then(data => {
            if (!data) {
                response.render('student_login', {
                    error: "Login with the correct roll number and name" 
                });
            } else {
                response.render("view_result", { student: data });
            }
        })
        .catch(err => {
            response.render('student_login', {
                error: "Error occurred while finding data" 
            });
        });
};
