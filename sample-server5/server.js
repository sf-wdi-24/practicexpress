var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(process.env.PORT || 5002, function (req, set) {
	console.log('Well ok then!');
});