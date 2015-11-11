// EXPRESS SERVER
var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// DATA
familyData = [
	{name: "AJ"},
	{name: "Martha"},
	{name: "Michael"}
 ];

// ROUTES
app.get('/', function(req,res){
	res.send("Hello family!");
});

app.get('/about', function(req,res){
	res.render('about', {family: familyData});
});

app.get('/api/family', function(req,res){
	res.json(familyData);
});

// PORT
var server = app.listen(3000, function(){
	console.log("Server is up!");
});