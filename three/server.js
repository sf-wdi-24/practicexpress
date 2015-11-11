// SERVER SIDE JAVASCRIPT

var express = require('express');
var hbs = require('hbs');

var app = express();

// Set up static files in public directory
app.use(express.static('public'));

// Set up view engine for hbs
app.set('view engine', 'hbs');

// Set up seed data
var presidential_candidates = {
	republicans: ['Bush', 'Trump', 'Carson'],
	democrats: ['Clinton', 'Sanders', 'Biden']
};

// Set up routes
app.get('/three/', function(req, res) {
	res.render('index');
});

app.get('/three/again/', function(req, res) {
	res.render('again');
});

app.get('/three/json/', function(req, res) {
	res.json(presidential_candidates);
});

// Set up listener to create the server
var server = app.listen(process.env.PORT || 5000, function () {
	console.log('Okay, this is getting creepy now');
});