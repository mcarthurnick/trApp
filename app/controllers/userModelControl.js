var mongoose = require('mongoose');
var User = require('../models/user-model.js');

module.exports = {
  getUsers: function(req, res) {
    User.find({firstName: "Nick"}, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(user);
        res.status(200).send(user);
      }
    })
  },

  addUsers: function(req, res) {
    var user = new User(req.body);
    user.save(function(err, s) {
      return err ? res.status(500).send(err) : res.send(s);
    });
  }


}
