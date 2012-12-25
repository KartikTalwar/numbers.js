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

});
