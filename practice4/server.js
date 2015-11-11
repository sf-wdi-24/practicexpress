var express = require("express");
var hbs = require("hbs");

var app = express();

//set up view engine
app.set("view engine", "hbs");

//set up static file
app.use(express.static('public'));

//set up seed data

var title = "Ultimate Racing Cars";
var carList = [
	{
		car: "Car 1",
		pic: "gray.gif",
		maxSpeed: "300 mph"
	},
	{
		car: "Car 2",
		pic: "white.gif",
		maxSpeed: "270 mph"
	},
	{
		car: "Car 3",
		pic: "red.gif",
		maxSpeed: "350 mph"
	},
	{
		car: "Car 4",
		pic: "white2.gif",
		maxSpeed: "320 mph"
	},
	{
		car: "Car 5",
		pic: "orange.gif",
		maxSpeed: "340 mph"
	},
	{
		car: "Car 6",
		pic: "white3.gif",
		maxSpeed: "300 mph"
	}
];


//set up routes
app.get("/", function (req, res) {
	res.send("Hello, is it me you're looking for?");
});

app.get("/cars", function (req, res) {
	res.render("index", {carsTitle: title, vehicles: carList});
});

//set up server
var server = app.listen(3000, function() {
	console.log("Be careful, I'm always listening!");
});