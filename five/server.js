// Server Side Javascript

var express = require('express');
var hbs = require('hbs');

var app = express();

// Set up static files in public directory
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'hbs');

// Set up seed data
var presidential_candidates = {
	republicans: ['Bush', 'Trump', 'Carson'],
	democrats: ['Clinton', 'Sanders', 'Biden'],
	independents: ['Noble', 'Jinxx Monsoon', 'Mrs. Pash from fourth grade (truly inspirational)']
};

// Set up routes
app.get('/five/', function(req, res) {
	res.render('index');
});

app.get('/five/again/', function(req, res) {
	res.render('again');
});

app.get('/five/json/', function(req, res) {
	res.json(presidential_candidates);
});

// Set up listener
var server = app.listen(process.env.PORT || 5000, function() {
	console.log('enough already... make your own chatter');
});