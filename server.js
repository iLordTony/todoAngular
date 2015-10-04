var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');
var cors = require('cors');

var port = process.env.PORT || 8080;
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({varControls: ['{$', '$}']});

app.set('views', __dirname + '/app/views/templates');

app.use(express.static(path.join(__dirname, './app/static/')));
app.use(cors());

app.get('/', function (req, res, next) {
    res.render('index');
});

app.get('/api', function (req, res, next) {
    var data = {
        valor: "Esto es de prueba"
    };
    res.set('Content-Type', 'application/json')
        .json(data);
});

app.listen(port, function () {
    console.log('Corriendo en el puerto: ' + port);
});
