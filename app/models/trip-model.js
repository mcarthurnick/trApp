var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema ({
  destination: {type: String},
  arrivalDate: {type: String},
  departDate: {type: String},
  amountToSave: {type: String},
  created: {type: String}
});

module.exports = mongoose.model('Trip', tripSchema);
