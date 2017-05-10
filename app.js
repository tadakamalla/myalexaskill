'use strict';
var express = require('express')
var http = require('http')
var path = require('path');
var request=require("request");
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.post('/provision', function(req, res) {
	
	
	request('http://129.146.35.106:8081/orchestration/aws/provision');

	   	    res.json({
	      "version": "1.0",
	      "response": {
	        "shouldEndSession": true,
	        "outputSpeech": {
	          "type": "SSML",
	          "ssml": "<speak>Provisioning a VM in Baremetal Cloud</speak>"
	        }
	      }
	    });
	  
	});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
