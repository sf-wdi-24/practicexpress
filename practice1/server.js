//server to require node packages
var express = require('express');
var hbs = require('express');

//set variable for express function
var app = express();

//set app view to index
app.set('view engine', 'hbs');

// app.get('/',function (req,res){
// 	res.send("here i am");
// });

var bands = [ {artist: 'Tiger Army'},
							{artist: 'Incubus'},
							{artist: 'The Black Keys'}];

//use static files
app.use(express.static('public'));

//render index page
app.get('/', function (req,res) {
	res.render('index', {bands: bands});
});



//tell server to listen to port 3000
app.listen(3000, function(){
	console.log("im listening");
});