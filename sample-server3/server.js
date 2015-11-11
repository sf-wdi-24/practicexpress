var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function (req, res){
	res.render('index');
});



var server = app.listen(process.env.PORT || 5000, function() {
	console.log('Sup den?');
});

