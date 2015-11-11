// Server Side Javascript

var express = require('express');
var hbs = require('hbs');

var app = express();

// Set up static files
app.use(express.static('public'));

// Set up view engine for handlebars
app.set('view engine', 'hbs');

// Set up seed data
var presidential_candidates = {
	republicans: ['Bush', 'Trump', 'Carson'],
	democrats: ['Clinton', 'Sanders', 'Biden']
};

// Set up routes
app.get('/two/', function(req, res) {
	res.render('index');
});

app.get('/two/json', function(req, res) {
	res.json(presidential_candidates);
});


// Create the server by having the app listen
var server = app.listen(process.env.PORT || 5000, function() {
	console.log('listening');
});