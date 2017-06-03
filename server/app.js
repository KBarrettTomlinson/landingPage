
//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var index = require('././modules/index.js');

//globals
var app = express();
var port = 5000;

//uses
app.use( bodyParser.urlencoded( {extended: true}));
app.use( express.static ('server/public/views'));
app.use( '/', index );

//listening
app.listen( port, function(){
  console.log("I'm listening for  you on port:",port);
});//ends listening
