var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  phone: {type: String},
  location: {type: String},
  baseAirport: {type: String}
});


module.exports = mongoose.model('User', userSchema);
