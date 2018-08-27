require('marko/node-require').install();

var express = require('express');

var app = express();

app.get('/', require('./src/pages/home'));
app.get('/detail', require('./src/pages/detail'));

app.listen(8080, function() {
    console.log('listening on port 8080');
});