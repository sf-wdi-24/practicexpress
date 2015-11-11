var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

var students = [{
	name: "Cynthia"
}, {
	name: "Andre"
}, {
	name: "Allen"
}, {
	name: "Trung"
}, {
	name: "Eddy"
}, {
	name: "John"
}, {
	name: "Stanley"
}, {
	name: "Carlos"
}, {
	name: "Michael"
}, {
	name: "Steve"
}, {
	name: "Adam"
}, {
	name: "Zohar"
}, {
	name: "Victoria"
}, {
	name: "Dave"
}];

app.get('/', function(req, res) {
	res.render('index', {
		students: students
	});
});

app.use(express.static('public'));



app.listen(3000, function() {
	console.log("server accounted for");
});