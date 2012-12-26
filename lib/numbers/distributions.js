/**
 * matrix.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski, Kartik Talwar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var numbers = require('../numbers');
var basic = numbers.basic;
var distribution = exports;


/**
 * Computes the binomial distribution
 *
 * @param {Number} x number of successes
 * @param {Number} n number of trials
 * @param {Number} p probability mass
 * @return {Number} computed probability
 */
distribution.binomial = function (x, n, p) {
  return basic.binomial(n, x) * Math.pow(p, x) * Math.pow((1 - p), n - x);
};

/**
 * Computes the Bernoulli distribution
 *
 * @param {Number} x number of successes
 * @param {Number} p probability mass
 * @return {Number} computed probability
 */
distribution.bernouilli = function (x, p) {
  return Math.pow(p, x) * Math.pow((1 - p), 1-x);
};

/**
 * Computes the negative binomial distribution
 *
 * @param {Number} x number of successes
 * @param {Number} r number of failures
 * @param {Number} p probability mass
 * @return {Number} computed probability
 */
distribution.negativeBinomial = function (x, r, p) {
  return basic.binomial(x + r - 1, x) * Math.pow(p, x) * Math.pow((1 - p), x);
};

/**
 * Computes the geometric distribution
 *
 * @param {Number} x number of successes
 * @param {Number} p probability mass
 * @return {Number} computed probability
 */
distribution.geometric = function (x, p) {
  return p * Math.pow((1 - p), x);
};

/**
 * Computes the hypergeometric distribution
 *
 * @param {Number} x random variable
 * @param {Number} N population size
 * @param {Number} r number of successes
 * @param {Number} n number of draws
 * @return {Number} computed probability
 */
distribution.hypergeometric = function (x, N, r, n) {
  return (basic.binomial(r, x) * basic.binomial(N - r, n - x)) / basic.binomial(N, n);
};

/**
 * Computes the Poisson distribution
 * lambda = np (rate)
 *
 * @param {Number} x number of successes
 * @param {Number} n number of trials
 * @param {Number} p probability of trial
 * @return {Number} computed probability
 */
distribution.poisson = function (x, n, p) {
  var lambda = (p == undefined) ? n : n * p;
  return (Math.pow(Math.E, -1 * lambda) * Math.pow(lambda, x)) / basic.factorial(x);
};

/**
 * Computes the uniform distribution
 * a <= x <= b
 *
 * @param {Number} a starting interval
 * @param {Number} b ending interval
 * @return {Number} computed probability
 */
distribution.uniform = function (a, b) {
  return 1 / (b - a);
};

/**
 * Computes the exponential distribution
 *
 * @param {Number} x number of successes
 * @param {Number} lambda rate parameter
 * @return {Number} computed probability
 */
distribution.exponential = function (x, lambda) {
  return lambda * Math.pow(Math.E, -1 * lambda * x);
};

/**
 * Computes the normal distribution
 *
 * @param {Number} x probability mass
 * @param {Number} mu mean
 * @param {Number} sigmaSquared variance
 * @return {Number} computed probability
 */
distribution.normal = function (x, mu, sigmaSquared) {
  var numerator = Math.pow(Math.E, (-1 * Math.pow((x - mu), 2) / (2 * sigmaSquared)));
  var denominator = Math.sqrt(2 * Math.PI) * Math.sqrt(sigmaSquared);
  return numerator / denominator;
};