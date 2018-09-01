require('marko/node-require').install();

require('lasso').configure({
    "plugins": [
        "lasso-marko"
    ]
});

var express = require('express');

var app = express();
app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./src/pages/home')); //require the page controller
app.get('/detail', require('./src/pages/detail'));
app.get('/search', require('./src/pages/search'));

app.listen(8080, function() {
    console.log('listening on port 8080');
});