module.exports = {
	//used in server.js to set the location of the mongoDB
	"mongoUrl": "mongodb://localhost:27017/pokemon",
	//used to set up a secure https server
	"privateKey": "/etc/letsencrypt/live/fullmeter.com/privkey.pem",
	"certificate": "/etc/letsencrypt/live/fullmeter.com/cert.pem",
	//the main URL of your site, used to allows CORS
	"homeUrl": "https://fullmeter.com",
	
}