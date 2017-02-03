var db = require("../models");

module.exports = function(app) {

app.get("/api/students", function(req, res) {
    db.Student.findAll({
      include: [db.IndividualTransactions]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
  // Check Login Information
  app.get("/api/students/:studentId", function(req, res) {
    db.student.findOne({
      where: {
        studentId: req.params.studentId
      },
      include: [db.IndividualTransactions]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
  // Find all Authors and return them to the user with res.json
  app.post("/api/students", function(req, res) {
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  app.get("/api/buyers", function(req, res) {
    db.Student.findAll({

      where : {
        userType: "buyer"
      }
    }).then(function(sellerfind) {
      res.json(sellerfind);
    });
  });

  app.post("/api/newStudent", function(req, res) {
     // store new seller data
    console.log("consoling req.body from api-routes.js post route " + req.body);
    db.Student.create(req.body).then(function(newSeller) {
      res.json(newSeller);
    });
  });




};