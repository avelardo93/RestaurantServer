//--set upserver 

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express ();
var PORT = 8081; 	// set the port
var staticContentFolder;

//some basic config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

staticContentFolder = __dirname + '/content';

app.listen(PORT,function() {
	console.log('Serving static content from ' + staticContentFolder)
	console.log('App listenting on PORT: '+ PORT);
});