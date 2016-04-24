var express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , mongoose = require('mongoose')
    , session = require('express-session')
    , moment = require('moment')
    , morgan = require('morgan')
    , methodOverride = require('method-override')
    , userModelControl = require('./app/controllers/userModelControl.js')
    , tripModelControl = require('./app/controllers/tripModelControl.js');

var app = express();
var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'my secret session cat',
  resave: true,
  saveUninitialized: false
}));

app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb://localhost/trapp");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});


// app.get('/', userModelControl.checkAuth);
app.post('/login', userModelControl.loginUser);
//app.post('/trip', userModelControl.addTrip);
app.get('/dashboard', userModelControl.getUsers);
app.post('/register', userModelControl.addUser);
//app.post('/addNewUser', userModelControl.addNewUser);


var port = 3000;
app.listen(port, function() {
  console.log('Listening to port ' + port);
});
