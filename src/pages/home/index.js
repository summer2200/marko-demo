//home page controller
var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        name: 'Frank'
    }, res);
    // res.write('Hello world!');
    // res.end();
};


// class {
//     search() {
//         console.log('searching');
//     }
// }