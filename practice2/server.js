var express = require('express');
var hbs = require('hbs');
var app = express();
var beers = [
	{brand: "sierra nevada", name: 'wheat'}, 
	{brand: "anchor", name: 'anchor ipa'}, 
	{brand: 'duff', name: 'beer'}
];


app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.render('index', {beers: beers});
});

app.listen(3000, function(req, res) {
	console.log('listening');
});