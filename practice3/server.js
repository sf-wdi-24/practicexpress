var express = require("express");
var hbs = require("hbs");

var app = express();

var burgers = [
  "Hamburger",
  "Cheese Burger",
  "Dble Cheese Burger"
];
var capitalLetter = burgers.join("").match(/[A-Z]/g);

var tacos = [
  "Soft Taco",
  "Crunchy Taco",
  "Super Taco"
];
var vowel = tacos.join("").match(/[aeiou]/gi);

app.get("/", function (req, res) {
	res.send("Please go to localhost:5000/burgers  and localhost:5000/tacos");
});

app.get("/burgers", function (req, res) {
	res.send("There is " + capitalLetter.length + " capital letters in these burgers: " + burgers.join(", ") + ". There are: " + capitalLetter.join(", ") + ".");
});

app.get("/tacos", function (req, res) {
	res.send("In these words: " + tacos.join(", ") + ". There are " + vowel.length + " vowels.");
});

app.listen(5000, function () {
	console.log("Yes, I'm listening");
});