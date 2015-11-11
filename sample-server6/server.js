var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function (req, res){
	res.render('index');
});

app.listen(process.env.PORT || 5003, function(){
	console.log('Sweet Berry Wine');
});