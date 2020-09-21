const assert = require('chai').assert;


const f = require('./code');
const { AssertionError } = require('chai');



it("42 is 42", () => {
  assert.equal(40 + 2, 42, "wat");      // evaluates `40+1`, passes that to equal()
})


it("f(0) is 42", () => {
  assert.equal(f(0), 42, "wat");      // evaluates `f(0)`, passes that to equal()
})

it("f(1) results in a failing test", () => {
  assert.equal(f(1), 42, "wat");      // evaluates `f(1)`, which throws, and so it crashes before it can call equal(), doesn't pass but also never says "wat"
})


it("()=>f(1) is a function which if called will throw", () => {
  // assert.equal(f(1), 42, "wat");

  assert.throws(()=>f(1))
})




// this is a very loose approximation of part of what assert.throws does.
// I have not tested this code in any way, it's off the dome
// it's pretty sloppy about the stuff around expectedThrow, probably that part is wrong

function throws(fn, expectedthrow) {
  // if fn throws, don't throw, just return
  // if fn doesn't throw, throw!

  try {
    fn()
  } catch (e) {
    if (e === expectedthrow) {      // this line is probably too vague to be correct
      // if fn throws, don't throw, just return
      return;
    }
  }
   // if fn doesn't throw, throw!
  throw new AssertionError("didn't throw");
}