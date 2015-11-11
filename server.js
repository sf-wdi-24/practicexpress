var express = require('express');
var app = express();


app.set('view engine', 'hbs');
var hbs = require('hbs');

app.use(express.static('public'));











 var myName = "Eddy Chang";

  var albums = [
    { title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    { title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    { title: 'Fake History',
      artist: 'letlive'
  }];



/* app.get('/', function (req, res) {
    res.render('index', {name: myName});
  });*/

  app.get('/', function (req, res) {
    res.render('index', {name: myName});
  });


  // app.get('/', function (req, res) {
  //   res.render('albums', {taco: albums});
  // });


// hbs.registerHelper('list', function(context, options) {
// var ret = "<ul>";

// for(var i=0, j=context.length; i<j; i++) {
//   ret = ret + "<li>" + options.fn(context[i]) + "</li>";
// }

//   return ret + "</ul>";
// });





app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  }); 