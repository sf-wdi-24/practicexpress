var express = require('express');
var hbs = require('hbs');
var app = express();

var sfBars = [{
	name : 'Hemlock',
	location : 'Polk'},
	{name : 'Fishbowl',
	location : 'Divisadero'}];

var sfBfSpots = [{name : 'Toast',
location : 'Divisadero'}, 
{name : 'Beanbag Cafe',
location : 'Divisadero'}];

app.set('view engine', 'hbs');

app.get('/', function (req, res){
	res.render('index');
});

app.get('/bars', function (req, res){
	res.render('bars', {bars : sfBars});
});

app.get('/bfspots', function (req, res){
	res.render('bfspots', {bfspots : sfBfSpots});
});

var server = app.listen(process.env.PORT || 3000, function () {
	console.log("Example app listening at http://localhose:3000/");
});