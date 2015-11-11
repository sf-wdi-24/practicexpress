var express = require("express");
var app = express();
var hbs = require("hbs");


var students = [{name: "Zohar"}, {name: "Michael"}, {name: "Dave"}, {name: "Cynthia"}, {name: "Carlos"}, 
{name: "Trung"}, {name: "Victoria"}, {name: "Steve"}, {name: "Adam"}, {name: "Cynthia"}, {name: "Eddie"}, {name: "allen"}, 
{name: "andre"}, {name: "Stenly"}];

app.listen(3000, function(){console.log("listening");
});

app.set("view engines", "hbs");

app.get("/", function(req, res){
	res.send("hi");
});
app.get("/zohar", function(req, res){
	res.send("hi zohar");
});
app.get("/classnames", function(req, res){
	res.render("index.hbs",{students: students});
});
app.get("/classnamesjason", function(req, res){
	res.json(students);
});

hbs.registerHelper('list', function(context, options) {
var ret = "<ul>";

for(var i=0, j=context.length; i<j; i++) {
  ret = ret + "<li>" + options.fn(context[i]) + "</li>";
}

  return ret + "</ul>";
});

