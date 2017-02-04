var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  


  app.get("/api/students", function(req, res) {
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


  // app.post("/api/newBuyer", function(req, res) {
  //    // store new buyer data
  //   console.log("consoling req.body from api-routes.js post route " + req.body);
  //   db.Student.create(req.body).then(function(newBuyer) {


  //   	db.Student.findOne({

  //     where : {
  //       id: req.body.seller.id
  //     }
  //   }).then(function(sellerfind) {
  //     res.json(sellerfind);

  //   	//db.student.findOne( where id ...req.body.seller.id)
  //   	// find seller
  //   	// remove swipe & add money from req.body.numSwipes from seller's balance
  //   	// add swipes & subtract money to for buyer
  //     res.json(newBuyer);

  //     //before rest
  // //   });
  // });






};