var assert = require('assert');
var numbers = require('../index.js');
var distribution = numbers.distribution;

suite('numbers', function() {

  console.log('\n\n\033[34mTesting Statistical Distributions\033[0m');

  test('segment should return the binomial distribution for the given params', function(done) {
    var res1 = distribution.binomial(4, 4, 0.5);
    var res2 = distribution.binomial(4, 8, 0.5);

    assert.equal(0.0625, res1);
    assert.equal(0.2734375, res2);
    done();
  });

  test('segment should return the Bernouilli distribution for the given params', function(done) {
    var res1 = distribution.bernouilli(4, 0.5);
    var res2 = distribution.bernouilli(2, 0.3);

    assert.equal(0.5, res1);
    assert.equal(0.12857142857142856, res2);
    done();
  });

  test('segment should return the negative binomial distribution for the given params', function(done) {
    var res1 = distribution.negativeBinomial(4, 2, 0.5);
    var res2 = distribution.negativeBinomial(10, 9, 0.3);

    assert.equal(0.01953125, res1);
    assert.equal(0.007298782318441188, res2);
    done();
  });

});
