require('marko/node-require').install();
require('marko/express');

require('lasso').configure({
    plugins: [
        "lasso-marko"
    ]
});

var express = require('express');
var fs = require('fs');
var app = express();
var detailTpl = require('./src/routes/detail/template.marko');

app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./src/routes/home')); //require the page controller
app.get('/search', require('./src/routes/search'));
app.get('/detail', function(req, res) {
    res.marko(detailTpl, {
        movieName: '500 Days of Summer',
        director: 'Marc Webb',
        stars: ['Joseph Gordon-Levitt', 'Zooey Deschanel'],
        plot: 'The film is presented in a nonlinear narrative, jumping between various days within the 500 days of Tom and Summer\'s relationship. There is an on-screen timer showing the day. The following is a linear summary of the plot.',
        awards: ['Best Original Screenplay', 'Best Screenplay']
    });
});

app.post('/detail', function(req, res) {
    res.send('post response to detail page.');
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});