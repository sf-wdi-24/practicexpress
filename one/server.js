// Server Side Javascript

// Require node packages
var express = require('express');
var hbs = require('hbs');

// Not entirely sure what htis does...
var app = express();

// Set up static files to include the public directory
app.use(express.static('public'));

// Set up the view engine to accept handlebars files
app.set('view engine', 'hbs');

// Set up seed data (if applicable)
var presidential_candidates = {
	republicans: ['Bush', 'Trump', 'Carson'],
	democrats: ['Clinton', 'Sanders', 'Biden']
};

// Set up routes
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/again', function(req, res) {
	res.render('again');
});

app.get('/json', function(req, res) {
	res.json(presidential_candidates);
});

// Create the server by having the app listen
var server = app.listen(process.env.PORT || 5000, function() {
	console.log("I'm listening in on your conversation.");
});