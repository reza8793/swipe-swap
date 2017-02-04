// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/transactions", function(req, res) {
    var query = {};
    if (req.query.student_id) {
      query.StudentId = req.query.student_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Transaction.findAll({
      where: query,
      include: [db.Student]
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

    // Get rotue for retrieving a single post
  app.get("/api/transactions/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Transaction.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Student]
    }).then(function(dbTransaction) {
      res.json(dbPost);
    });
  });

    // POST route for saving a new transaction
  app.post("/api/transactions", function(req, res) {
    db.Transaction.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

    // PUT route for updating transaction
  app.put("/api/transactions", function(req, res) {
    db.Transaction.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};


