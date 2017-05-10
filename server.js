'use strict';
var express = require('express')
var http = require('http')
var path = require('path');
var request=require("request");
var app = express();
var PORT = process.env.PORT || 8085;

// development only
app.post('/provision', function(req, res) {
	
	
	
	 request('http://129.146.35.106:8081/orchestration/bmcs/provision');

	   	    res.json({
	      "version": "1.0",
	      "response": {
	        "shouldEndSession": true,
	        "outputSpeech": {
	          "type": "SSML",
	          "ssml": "<speak>I love Oracle Cloud, your VM will be provisioned momentarily</speak>"
	        }
	      }
	    });
	  
	});
app.listen(PORT, function () {
    console.log('listening on port ' + PORT)

});
