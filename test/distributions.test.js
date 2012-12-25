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

  test('segment should return the geometric distribution for the given params', function(done) {
    var res1 = distribution.geometric(4, 0.5);
    var res2 = distribution.geometric(2, 0.32);

    assert.equal(0.03125, res1);
    assert.equal(0.147968, res2);
    done();
  });

  test('segment should return the hyergeometric distribution for the given params', function(done) {
    var res1 = distribution.hypergeometric(2, 10, 2, 5);
    var res2 = distribution.hypergeometric(2, 2, 2, 2);

    assert.equal(0.2222222222222222, res1);
    assert.equal(1, res2);
    done();
  });

  test('segment should return the Poisson distribution for the given params', function(done) {
    var res1 = distribution.poisson(2, 0.32);
    var res2 = distribution.poisson(2, 2, 0.16);

    assert.equal(0.03717883069817298, res1);
    assert.equal(0.03717883069817298, res2);
    done();
  });

  test('segment should return the uniform distribution for the given params', function(done) {
    var res1 = distribution.uniform(2, 4);
    var res2 = distribution.uniform(0.5, 0.8);

    assert.equal(0.5, res1);
    assert.equal(3.333333333333333, res2);
    done();
  });

});
