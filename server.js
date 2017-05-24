'use strict';
var express = require('express')
var http = require('http')
var path = require('path');
var request=require("request");
var app = express();
var PORT = process.env.PORT || 8085;

// development only
app.post('/provision', function(req, res) {
	
	
	
	 request('http://129.146.35.106:8081/orchestration/bmcs/provision',function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log("Provisioning request from ALEXA..");
		     }

	   	    
		})
		res.json({
		      "version": "1.0",
		      "response": {
		        "shouldEndSession": true,
		        "outputSpeech": {
		          "type": "SSML",
		          "ssml": "<speak>CentOS VM Standard 1.2 will be provisioned momentarily in <say-as interpret-as='spell-out'>AD1</say-as> of Oracle Gen2 Cloud</speak>"
		        }
		      }
		    });

		  
		});

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
