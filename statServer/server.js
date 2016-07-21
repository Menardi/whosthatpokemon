var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// These variables allow us to set up the https server
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/fullmeter.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/fullmeter.com/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};



//connection url
var url = 'mongodb://localhost:27017/pokemon'
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //we're connected!
  console.log("Connected correctly to server");
});

var statRouter = require('./statRouter');

var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://fullmeter.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/stats', statRouter);




var httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000);