

// this file demos a few different kind of assert




let car = { make: 'Citroën', model: 'Deux Chevaux', color: 'red' }


let cases = [
  () => {
    console.log("assert() built into JS the language itself")
    const assert = require('console').assert;

    // this means: I want this to be true, here's the error message if they're not
    assert(car.color === 'beige', "boring colours are exciting in my heart")
  },

  () => {
    console.log("node built in assert()")
    const assert = require('assert');

    // this means: I want this to be true, here's the error message if they're not
    assert(car.color === 'beige', "boring colours are exciting in my heart")
  },

  () => {
    console.log("node built in assert.equal()")
    const assert = require('assert');

    // this means: I want these two things equal, here's the error message if they're not
    assert.equal(car.color, "beige", "boring colours are exciting in my heart")
  },

  () => {
    console.log("chai assert()")
    console.log("chai assert()")
    const assert = require('chai').assert;

    // this means: I want this to be true, here's the error message if they're not
    assert(car.color === 'beige', "boring colours are exciting in my heart")
  },

  () => {
    console.log("chai assert.equal()")
    const assert = require('chai').assert;

    // this means: I want these two things equal, here's the error message if they're not
    assert.equal(car.color, "beige", "boring colours are exciting in my heart")
  },


]

let choice = process.argv[2] - 1;
if (cases[choice]) {
  cases[choice]();
} else {
  console.error(`please supply a command-line arg for a case from 1 to ${cases.length}`)
}