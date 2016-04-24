var mongoose = require('mongoose');
var session = require('express-session');
var User = require('../models/user-model.js');
module.exports = {
  checkAuth: function(req, res, next) {
    var sess = req.session
    if(sess.email) {
      res.redirect('/dashboard');
    }
    else {
      res.render('/login');
    }
  },

    loginUser: function(req, res, next) {
      User.find({"email": req.body.email}, function(err, user) {
        console.log(user);
        if (!user) {
          return res.send({error: 'Invalid email or password'});
        } else {
          if (user[0].password){
            req.session.user = user;
            res.send('success');
        } else {
          console.log("FAILED AT SECOND IF");
          return res.send({error: 'Invalid email or password'});
        };
      }
    })
  },


  getUsers: function(req, res) {
    User.find({firstName: "Nick"}, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        //console.log(user);
        res.status(200).send(user);
      }
    })
  },

  addUser: function(req, res) {
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
    user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    })
  }

  // addNewUser: function(req, res) {
  //   var user = new User({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     password: req.body.password,
  //     trips.destination = req.body.destination,
  //     trips.arrivalDate = req.body.arrivalDate,
  //     trips.departDate = req.body.departDate,
  //     trips.amountToSave = req.body.amountToSave,
  //     trips.amountDeposited = req.body.amountDeposited,
  //     deposits.description = req.body.description,
  //     deposits.amountDeposited = req.body.amountDeposited
  //   });
  //   user.save(function(err, user) {
  //     if (err)
  //       res.send(err);
  //     res.json(user);
  //   })
  // },

  // addTrip: function(req, res) {
  //   User.find({"firstName": "Nick"}).update(
  //     {$push:
  //       {trips :[
  //           {desination: req.body.destination,
  //           arrivalDate: req.body.arrivalDate,
  //           departDate: req.body.departDate,
  //           amountToSave: req.body.amountToSave}
  //         ]}
  //     }
  //   )
  //   console.log(req.body);
  // }


    // updateTrip: function(req, res) {
    //   User.update(
    //     {"firstName": "Nick"},
    //     {$push:
    //       {trips :
    //         {$each: [
    //           {desination: req.body.destination},
    //           {arrivalDate: req.body.arrivalDate},
    //           {departDate: req.body.departDate},
    //           {amountToSave: req.body.amountToSave},
    //         ]
    //         }
    //       }
    //     })
    //   }
      // User.save(function(err, user) {
      //   if (err)
      //     res.send(err);
      //   res.json(user);
      // })
}
