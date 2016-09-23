var express = require('express');
var bodyParser = require('body-parser');

var bookShelfApi = require('./server/serviceApi');

var app = express();
app.use(bodyParser());
app.use(express.static('.'));

app.get('/', function(request, response) {
    response.sendfile('Index.html');
});

app.listen(8000, function() {
    console.log('Express server started!!!');
});