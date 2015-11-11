var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static('public'));

macNCheeseData = [
	{name: "regular"},
	{name: "buffalo"}
 ];

 app.get('/', function(req,res){
 	res.send("I love Mac-n-Cheese!");
 });

 app.get('/about', function(req,res){
 	res.render('about', {mnc: macNCheeseData});
 });

 app.get('/api/mnc', function(req,res){
 	res.json(macNCheeseData);
 });

 var server = app.listen(3000, function(){
 	console.log("The mac n cheese is cookin'!");
 });