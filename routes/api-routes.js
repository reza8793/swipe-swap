var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/sellers", function(req, res) {
    db.Student.findAll({

    	where : {
    		userType: "seller"
    	}
    }).then(function(sellerfind) {
      res.json(sellerfind);
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

  app.post("/api/newSeller", function(req, res) {
     // store new seller data
    console.log("consoling req.body from api-routes.js post route " + req.body);
    db.Student.create(req.body).then(function(newSeller) {
      res.json(newSeller);
    });
  });




};