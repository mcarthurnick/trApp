var express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , mongoose = require('mongoose')
    , userModelControl = require('./app/controllers/userModelControl.js')
    , tripModelControl = require('./app/controllers/tripModelControl.js');

var app = express();
var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb://localhost/trapp");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});



app.get('/trip', tripModelControl.getTrips);
app.post('/trip', tripModelControl.addTrips);
app.get('/user', userModelControl.getUsers);
app.post('/user', userModelControl.addUsers);

var port = 3000;
app.listen(port, function() {
  console.log('Listening to port ' + port);
});
