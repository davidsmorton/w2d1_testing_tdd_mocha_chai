

// this file is a lot like step1/calc.js, but now we've learned how to export, so the tests are somewhere else now!


function add(a, b) {
  if (b < 0) return add(b, a);
  if (b === 0) {
    return a;
  }
  return add(a + 1, b - 1);  
}


module.exports = {
  add,
}
