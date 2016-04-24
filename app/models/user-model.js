var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number},
  location: {type: String, required: true},
  baseAirport: {type: String},
  password: {type: String},
    trips : [new Schema({
        destination: {type: String},
        arrivalDate: {type: String},
        departDate: {type: String},
        amountToSave: {type: Number},
        amountSavedTotal: {type: Number, default: 0},
        created: {type: Date, default: Date.now},
        deposits : [new Schema({
            date: {type: Date, default: Date.now},
            description: {type: String},
            amountDeposited: {type: Number, min: 1}
        }, {strict:false})
      ]
    }, {strict:false})
  ],
}, {strict: false});



module.exports = mongoose.model('User', userSchema);
