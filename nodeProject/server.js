//require express and hbs node packages
var express = require('express');
var hbs = require('hbs');

var app = express();

var teams = [{name: "Giants"},
						 {name: "A's"},
						 {name: "49ers"}
];

//enable browser to render hbs pages
app.set('view engine', 'hbs');

//tell express to look for public folder
app.use(express.static('public'));

//get request and send it to the browser
// app.get('/', function(req,res) {
// 	res.send('String');
// });

app.get('/', function (req,res) {
	res.render('index', {teams: teams});
});

//give server an address
app.listen(3000, function(){
	console.log("listening still");
});

