var express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var Stats = require('./models/stats')

var statRouter = express.Router();
statRouter.use(bodyParser.json());

statRouter.route('/')
	.post(function(req, res, next) {
		/*
		 * Generate a unique user ID based on their IP address. We don't want to save the actual IP.
		 * This isn't about tracking, but to get an idea of how many answers per session a user
		 * does.
		 */
		var userIp = req.headers['x-real-ip'] || req.connection.remoteAddress;
		var userHash = crypto.createHash('md5').update(userIp + "uibqu9q0- 7n4vnw5evb4w68aw ae (w'").digest('hex');
		for (obj in req.body) {
			req.body[obj].userId = userHash;
		}

		Stats.create(req.body, function (err, stat) {
			if (err) {
				console.log(err);
				res.end();
			} else {
				res.writeHead(204);
				res.end();
			}
		})
	});

module.exports = statRouter;