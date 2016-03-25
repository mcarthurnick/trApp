var mongoose = require('mongoose');
var Trip = require('../models/trip-model.js');


module.exports = {
  getTrips: function(req, res) {
    Trip.find({destination: "Orlando, FL"}, function(err, trip) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(trip);
      }
    })
  },

  addTrips: function(req, res) {
    var trip = new Trip(req.body);
    trip.save(function(err, s) {
      return err ? res.status(500).send(err) : res.send(s);
    });
  }


}
