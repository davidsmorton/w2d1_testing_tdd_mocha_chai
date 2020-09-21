

// this file contains a trivial `add` function, which exists for the purpose of testing it, and a lo-fi DIY test suite

function add(a, b) {
  if (b < 0) return add(b, a);
  if (b === 0) {
    return a;
  }
  return add(a + 1, b - 1);  
}



// look, it's a test suite!   (a "test suite" is a collection of tests)

let tests = [

  function() {
    let desc = "it should add some numbers";
    let actual = add(2, 2);
    let expected = 4;
    if (actual === expected) {
      console.log(`${desc} OK`);
    } else {
      console.log(`FAIL: ${desc}    (actual) ${actual} !== (expected) ${expected}`)
    }
  },

  function() {
    let desc = "it should add some numbers, even if first is zero";
    let actual = add(7, 0);
    let expected = 7;
    if (actual === expected) {
      console.log(`${desc} OK`);
    } else {
      console.log(`FAIL: ${desc}    (actual) ${actual} !== (expected) ${expected}`)
    }
  }, 


  function() {
    let desc = "it should add some numbers, including negative numbers somewhere";
    let actual = add(-5, 2);
    let expected = -3;
    if (actual === expected) {
      console.log(`${desc} OK`);
    } else {
      console.log(`FAIL: ${desc}    (actual) ${actual} !== (expected) ${expected}`)
    }
  }, 

  function() {
    let desc = "it should add some numbers, including negative numbers anywhere";
    let actual = add(5, -2);
    let expected = 3;
    if (actual === expected) {
      console.log(`${desc} OK`);
    } else {
      console.log(`FAIL: ${desc}    (actual) ${actual} !== (expected) ${expected}`)
    }
  }, 
  
  function() {
    let desc = "it should add some numbers, including negative numbers everywhere";
    let actual = add(-2, -5);
    let expected = -7;
    if (actual === expected) {
      console.log(`${desc} OK`);
    } else {
      console.log(`FAIL: ${desc}    (actual) ${actual} !== (expected) ${expected}`)
    }
  }, 

];


// oh look, Jeremy is very clever, he puts functions in arrays so he can call them all in a loop.  such showoff, much wow.
// PS: if you do this in real code, your coworkers might be impressed, or they might think you're a jerk and a clown.  You have been warned.
// PPS: jerkclown.
for (let test of tests) {
  test();
}