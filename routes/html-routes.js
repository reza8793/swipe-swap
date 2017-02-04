
// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {


  app.get("/newSeller", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/newSeller.html"));
  });

  app.get("/buyer", function(req, res) {

    db.Student.findAll({

      where : {
        userType: "seller"
      }
    }).then(function(sellerList) {
      res.render("index", {sellers: sellerList});
    });

  });
};
