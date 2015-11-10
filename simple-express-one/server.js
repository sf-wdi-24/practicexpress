// SERVER SIDE JAVASCRIPT
var express = require('express'); // requires express module
var app = express(); // sets 'app' as express so we can re-use
var hbs = require('hbs'); // requires hbs module
app.set('view engine', 'hbs'); // sets hbs as the view render engine and assigns it to our app
app.use(express.static('public')); // allows us to use the public folder in the future

bookData = [
	{title: "The Giver"},
	{title: "Capital in the 21st Century"}
];

app.get('/', function(req, res){
	res.send('index', "Hello World!");
});

app.get('/about', function(req, res){
	res.render('about', {books: bookData});
});

app.get('/api/books', function(req, res){
	res.json(bookData);
});


// PORT
var server = app.listen(3000, function(){
	console.log("server running on 3000!");
});