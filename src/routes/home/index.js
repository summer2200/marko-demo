//home page controller
var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({}, res);
    // res.write('Hello world!');
    // res.end();
};