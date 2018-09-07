// var template = require('./template.marko');

module.exports = class {
    // var name = input.name;

    // if (name) {
    //     name = name.toUpperCase();
    // } else {
    //     name = '(no name)';
    // }
    // template.render({
    //     name: name
    // }, out);

    onCreate() {
        this.state = {
          count: 1,
          show: false
        };
      }

      onButtonClick(name, event, el) {
          this.state.show = true;
        alert('Hello ${name}');
      }
      increment() {
        return 'what s this';
      }
      sum() {
          return '1'+'qweqwrqwr';
      }
};