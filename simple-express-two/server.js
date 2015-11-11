// SERVER
var express = require('express'); // requires express module
var app = express(); // sets app as express so we can re-use
var hbs = require('hbs'); // requires hbs module
app.set('view engine', 'hbs'); // sets hbs as the view render engine and assigns it to our app
app.use(express.static('public')); // allows us to use the public folder in the future

// DATA
songData = [
	{ title: "i love rock and roll" },
	{ title: "i want it that way" }
];


// ROUTES
app.get('/', function(req, res){
	res.send("Hello Songs");
});

app.get('/api/songs', function(req, res){
	res.json(songData);
});

app.get('/about', function(req, res){
	res.render('about', {songs: songData});
});

// PORT
var server = app.listen(3000, function(){
	console.log("Hello song server!");
});