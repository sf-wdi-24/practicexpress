  // server.js
  // SERVER SIDE JAVASCRIPT

  var hbs = require('hbs');

  var express = require('express');
  var app = express();

  var myName = "David Esloano";

  app.use(express.static('public'));

  app.get('/', function(req, res) {
    res.render('index', {
      name: myName,
      cars: cars
    });
  });

  app.set('view engine', 'hbs');

  var cars = [{
    make: 'Ford',
    model: 'Nova'
  }, {
    make: 'Subaru',
    model: 'Outback'
  }, {
    make: 'Audi',
    model: 'A3'
  }];

  var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening at http://localhost:3000/');
  });

  hbs.registerHelper('list', function(context, options) {
    var ret = "<ul>";

    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }

    return ret + "</ul>";
  });