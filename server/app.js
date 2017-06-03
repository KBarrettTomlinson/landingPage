
//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index.js');

//globals
var app = express();

app.set('port', (process.env.PORT || 5000));

//uses
app.use( bodyParser.urlencoded( {extended: true}));
app.use( express.static ('./server/public'));
app.use( '/', index );

//listening
app.listen( app.get('port'), function(){
  console.log("I'm listening for  you on port:" + app.get('port'));
});//ends listening
