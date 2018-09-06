var fs = require('fs');

exports.getList = function() {
    fs.readFile('./data.json', (err,data)=> {
        console.log('1' + data);
        console.log('1.err' + err);
        // return data;
    });

    fs.readlink('http://jsonplaceholder.typicode.com/posts', (err, linkString) => {
        console.log('2' + err);
        console.log('3' + linkString);
    });
};