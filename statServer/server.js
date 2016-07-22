var express = require('express');
var fs = require('fs');
var http = require('http');
var mongoose = require('mongoose');

var statRouter = require('./statRouter');

const MONGO_URL = 'mongodb://localhost:27017/pokemon';
mongoose.connect(MONGO_URL);

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.use('/stats', statRouter);

var httpServer = http.createServer(app);
httpServer.listen(3000);