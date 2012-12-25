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
  return basic.binomial(n, x) * Math.pow(p, x) * Math.pow((1 - p), n-x);
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
