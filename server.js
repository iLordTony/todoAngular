var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');

var port = process.env.PORT || 8080;
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views/templates');

app.get('/', function (req, res, next) {
    res.render('index');
});

app.listen(port, function () {
    console.log('Corriendo en el puerto: ' + port);
});
