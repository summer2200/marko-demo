require('mocha');
var assert = require('assert');
var sinon = require('sinon');

var clock;

function debounce(callback) {
  var timer;
  return function () {
      clearTimeout(timer);
      var args = [].slice.call(arguments);
      timer = setTimeout(function () {
          callback.apply(this, args);
      }, 100);
  };
}

before(function () { clock = sinon.useFakeTimers(); });
after(function () { clock.restore(); });

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });

//     it('should done', function(done) {
//       setImmediate(done);
//     });

//   });
// });

describe('Sinon', function() {
  it('calls callback after 100ms', function () {
    var callback = sinon.fake();
    var throttled = debounce(callback);

    throttled();

    clock.tick(99);
    assert(callback.notCalled);

    clock.tick(1);
    assert(callback.calledOnce);

    // Also:
    assert.equal(new Date().getTime(), 100);
});
});



