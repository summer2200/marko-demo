var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        name: 'Ant-Man and the Wasp',
        country: 'America'
    }, res);
};