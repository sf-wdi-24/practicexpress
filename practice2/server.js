var express = require("express");
var hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

var mytravel = [
	{
		place: "Hawaii",
		pic: "http://blog.intheswim.com/wp-content/uploads/2014/12/sheraton-waikiki-pool.jpg"
	},
	{
		place: "Osaka",
		pic: "http://boutiquejapan.com/wp-content/uploads/2013/11/Osaka-Castle-Osaka-Japan-600.png"
	},
	{
		place: "Bahamas",
		pic: "http://images.canusa.de/img/hotel/bahamas/nassau-paradiseisland/atlantis/exterior-aussenansicht-strand.cr2100x1399-0x75.rgb.600x.jpg"
	},
	{
		place: "Paris",
		pic: "https://www.pacsafe.com/blog/wp-content/uploads/2013/10/Paris-France.jpg"
	}
];

app.get("/travel", function (req, res) {
	res.render("places", {destination: mytravel});
});


app.listen(4000, function () {
	console.log("Yes, I'm listening");
});