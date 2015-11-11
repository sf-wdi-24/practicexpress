// Server Side Javascript

var express = require('express');
var hbs = require('hbs');

var app = express();

// Set up static files for the public directory
app.use(express.static('public'));

// Set up view engine for hbs
app.set('view engine', 'hbs');

// Set up seed data
var presidential_candidates = {
	republicans: ['Bush', 'Trump', 'Carson'],
	democrats: ['Clinton', 'Sanders', 'Biden']
};

// Set up routes
app.get('/four/', function(req, res) {
	res.render('index');
});

app.get('/four/again/', function(req, res) {
	res.render('again');
});

app.get('/four/json/', function(req, res) {
	res.json(presidential_candidates);
});

// Set up app listener
var server = app.listen(process.env.PORT || 5000, function() {
	console.log('This is super creepy now.');
});