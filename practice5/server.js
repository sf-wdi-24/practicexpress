var express = require("express");
var hbs = require("hbs");

var app = express();

//set up view engine
app.set("view engine", "hbs");

//set up static file
app.use(express.static('public'));

//set up seed data
data = {
    school: "General Assembly",
    city: "San Francisco",
    course: "Web Development Immersive",
    course_id: "WDI24",
    classrootm: "7",
    students: [{
        id: 0,
        last_name: "Abeyta",
        first_name: "Adam",
        github_username: "abeytaadam"
    }, {
        id: 1,
        last_name: "Lee",
        first_name: "Alan",
        github_username: "alanlee35"
    }, {
        id: 2,
        last_name: "Massey",
        first_name: "Andre",
        github_username: "DreTGiant"
    }, {
        id: 3,
        last_name: "Saavedra",
        first_name: "Carlos",
        github_username: "murcielago17"
    }, {
        id: 4,
        last_name: "Salinas",
        first_name: "Cynthia",
        github_username: "Cyndy528"
    }, {
        id: 5,
        last_name: "Sloan",
        first_name: "Dave",
        github_username: "slnwlf"
    }, {
        id: 6,
        last_name: "Chang",
        first_name: "Eddy",
        github_username: "TheEddyChang"
    }, {
        id: 7,
        last_name: "Dwyer",
        first_name: "John",
        github_username: "Jsdwyer26"
    }, {
        id: 8,
        last_name: "Rockway",
        first_name: "Michael",
        github_username: "mrockway"
    }, {
        id: 9,
        last_name: "Stevens",
        first_name: "Stanley",
        github_username: "Stanleyyork"
    }, {
        id: 10,
        last_name: "Noble",
        first_name: "Steven",
        github_username: "stevennoble78"
    }, {
        id: 11,
        last_name: "Huynh",
        first_name: "Trung",
        github_username: "tkhuynh"
    }, {
        id: 12,
        last_name: "Frambach",
        first_name: "Victoria",
        github_username: "vframbach"
    }, {
        id: 13,
        last_name: "Muzafi",
        first_name: "Zohar",
        github_username: "zoharmuzafi"
    }]
};
var studentsList =  data.students;
app.get("/api/wdi24", function (req, res) {
	res.json(data);
});
app.get("/wdi24", function (req, res) {
	res.render("index", {school: data.school, city: data.city, course: data.course, course_id: data.course_id, classroom: data.classrootm, students: studentsList});
});
//server
var server = app.listen(8000, function() {
	console.log("I'm always listening!");
});