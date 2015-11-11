var express = require("express");
var hbs = require("hbs");

var app = express();

//set up view engine
app.set("view engine", "hbs");

//set up static file
app.use(express.static('public'));

//set up seed data

var pageTitle = "Trung's Music";

var myMusic = [
		{
			title: "Hello",
			artist: "Adele"
		},
		{
			title: "Sugar",
			artist: "Maroon 5"
		},
		{
			title: "Good for You",
			artist: "Selena Gomez"
		}
];


//set up routes
app.get("/", function (req, res) {
	res.send("Hello, is it me you're looking for?");
});

app.get("/music", function (req, res) {
	res.render("mymusic", {pageTitle: pageTitle, music: myMusic});
});

//set up server
var server = app.listen(3000, function() {
	console.log("Be careful, I'm always listening!");
});