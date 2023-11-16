var Userdb = require("../model/model");

//create and save new student data
exports.create = (request, response) => {
  //validate req
  if (!request.body) {
    response.status(400).send({ message: "content can not empty" });
    return;
  }

  //new student
  const student = new Userdb({
    roll: request.body.roll,
    name: request.body.name,
    dob: request.body.dob,
    score: request.body.score,
  });

  //save data in database
  student
    .save(student)
    .then((data) => {
      response.redirect("/add-student");
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || "Some error occured while creating operation",
      });
    });
};

exports.find = (request, response) => {
  if (request.query.roll) {
    const rollno = request.query.roll;
    Userdb.findOne({ roll: rollno })
      .then((data) => {
        if (!data) {
          response.status(404).send({ message: "Not found" });
        } else {
          response.send(data);
        }
      })
      .catch((err) => {
        response.status(500).send({ message: "Error retrieving the data" });
      });
  } else {
    Userdb.find()
      .then((students) => {
        response.send(students);
      })
      .catch((err) => {
        response
          .status(500)
          .send({
            message: err.message || "Error occurs while retrieving result",
          });
      });
  }
};

exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({ message: "Data should not be empty" });
  }

  const rollno = request.params.roll;

  // Update data based on rollno instead of id
  Userdb.findOneAndUpdate({ roll: rollno }, request.body, {
    new: true,
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        response
          .status(404)
          .send({
            message: `Cannot edit result with ${rollno}. Rollno not found!`,
          });
      } else {
        response.send(data);
      }
    })
    .catch((err) => {
      response.status(500).send({ message: "Error occurred while updating" });
    });
};

// delete student record
exports.deleteStudent = async (request, response) => {
  try {
    const deleteStudent = await Userdb.findByIdAndDelete(request.params.id);

    if (!deleteStudent) {
      return response.status(404).send({ message: `Student with ID ${request.params.id} not found.` });
    }

    return response.redirect("/view_all");
  } catch (error) {
    return response.status(500).send({ message: 'Error deleting the student record', error: error });
  }
};




