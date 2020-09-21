

// in this file, we do two things:
//  1/ we use require (to require a file we made, thus the path)
//  2/ we goof around with objects a bit, just for fun



// could do this
const alpha = require('./alpha');
console.log(alpha.blech(), alpha.answerVal);


const f = alpha.blech;
const v = alpha.answerVal;
console.log(f(), v);


// could also do this, even in the same file!
const { blech, answerVal } = require('./alpha')
console.log(blech(), answerVal);


// or this!
const alsoBlech = require('./alpha').blech;
console.log(alsoBlech());


