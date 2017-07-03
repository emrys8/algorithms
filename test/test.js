const assert = require('chai').expect;
const mainApp = require('../src/main.js')

describe("getPrimes", function() {

	describe("handle valid input of n", function () {
	it("should return primes numbers from 0 to n", function() {
		assert(mainApp.getPrimes(10)).to.eql([2, 3, 5, 7]);
	});
 })

   describe("handle negative values", function() {
   	 it ("should return undefined when given a negative value for n", function() {
   	 	assert.equal(mainApp.getPrimes(-4), 'undefined');
   	 });
   })

   describe("handle non-integer values", function() {
   	 it("should return undefined when given a string", function() {
   	 	assert.equal(mainApp.getPrimes('hello'), 'undefined');
   	 })
   })
})