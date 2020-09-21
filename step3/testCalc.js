

// this file is a lot like step1/calc.js, but now we've learned how to require, so the code-under-test is somewhere else now!

// the main point of this file is probably mocha, but also note the use of chai for assertions.

// this file won't work unless it's called from the mocha CLI tools, because `describe` and `it` won't be in scope otherwise


// it("i am a minimum passing test", () => {

// });

// it("i am a minimum failing test", () => {
//   // throw new Error();
// });


const assert = require('chai').assert;


const calc = require('./calc');


describe("calc", () => {
  describe("add", () => {
    // Core
    it("should add positive/positive", () => {
      let actual = calc.add(3, 6);
      let expected = 9;
      assert.equal(actual, actual, "ugly message");
    })

    // Identity
    it("should add positive/negative", () => {
      assert.equal(calc.add(3, -6), -3);
    })

    // Negatives
    it("should add negative/positive", () => {
      assert.equal(calc.add(-3, 6), 3);
    })

    // it("should add negative/negative", () => {
    //   assert.equal(calc.add(-3, -6), 7);
    // })

    it("should add positive/zero", () => {
      assert.equal(calc.add(3, 0), 3);
    })

  });

  // describe("subtract", () => {
  //   it("passes", () => {

  //   });

  //   it("fails", () => {
  //     throw new Error();
  //   })
  // })
})