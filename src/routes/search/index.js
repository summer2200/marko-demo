//use to export the page controller
var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        searchText: 'History',
        count: 245
    }, res);
};