var express = require('express');
var hbs = require('hbs');

var app = express();

var data = [{show: 'always sunny'},
						{show: 'archer'},
						{show: 'arrested development'},
						{show: 'parks and rec'}];

app.listen(3000, function(req,res){
	console.log('10-4 little buddy');
});

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index',{data: data});
});