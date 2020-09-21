


# outline

* why test?
* testing jargon.
* lo-fi DIY testing (no mocha, no chai)
* modules, module.exports, require
* what about real tools (mocha, chai)
* more testing philosophy




# why test?

because you will make more errors than you dreamed possible, and even if you don't, everyone else will, and I hate living in a world that's perpetually on fire.



# jargon

## manual testing vs automated testing

pros/cons:
* auto is faster / time-saver
* but maybe sometimes manual is faster
* manual: more confidence that apparent errors are real errors (vs the test being broken)
* auto: consistent!
* manual: adaptive in real time based on things you see/learn
* auto: more volume of tests/testing
* manual: catch UI/UX problems (UI is hard to auto-test, UX is perhaps impossible)
* manual is cheaper to get started
* auto is cheaper in the "long run"
* manual allows human intelligence/creativity
* auto is reliable/consistent/predictable (humans screw up when they get bored)
* auto is faster results (seconds instead of minutes or hours or days)
* auto: because it's cheaper, we can test stuff we wouldn't otherwise test
* auto can test things only a machine can measure (e.g. high-speed performance)
* automated tests are documentation (and less likely to lie than English documentation)

we'll be focussed on automated testing, though a lot of the following applies to both


## black-box vs white-box (vs "grey box")

did not really discuss


## unit testing (vs larger-scale)

unit testing vs integration testing vs end-to-end testing

 * sometimes unit tests are easier
 * sometimes harder
 * unit tests give you more specific feedback
 * sometimes you want to test the connections between things, which unit testing deliberately ignores
 * sometimes for getting the between-the-cracks issues integration testing is better
 * sometimes unit testings is better for that

we will be focused on unit testing (for now), though some of the following applies at other scales



# when do we test?

naive idea: write code, then test, then ship, then take money

realistic but mediocre: write code and tests and code and tests and code and tests etc

better: your tests are enduring, they'll be run in the far future, so build them to have some durability

also better: TDD (at least sometimes)

what is TDD:
 * write tests before writing code
 * red/green/refactor (I didn't really discuss this, but you can look up that phrase)

pros/cons TDD: 
* limitation: cannot white-box test
* pro: gives an explicit time to decide on requirements
* pro: an explicit plan for how will I know when I'm done
* pro: if you don't TDD, you probably will skimp on the tests
* pro: it can be super super fun (because it reduces the impact of the fear of failure/flailure)


# lo-fi DIY testing

The point of this section is to prove that you don't *need* mocha or chai to write tests, 90% of testing is philosophy/skill.

see `step1/calc.js`

But, I admit, no-tools testing is gross.


# I hate lo-fi, what should I do instead? modules. modules?

module.exports
require

(for now, ignore `import` and `export`; we'll see those in week 7 or something)


what can I require? whatever was exported!

what can I export? any value?  a function!  an object!  any other value, who cares!

(practically, I would guess that 90% of exports are objects, 10% are functions, and 0.01% are something else)


# mocha.  chai.  mocha+chai

## Chai

https://www.chaijs.com/api/assert/

Remember to read the docs!


"an assertion library"

```
/// ultra-vanilla JS assert, no chai, no require
assert(bool, message)
```

```
// this could be the assert built in to node, like require('assert'), or it could be chai, like require('chai').assert

let car = { make: 'Citroën', model: 'Deux Chevaux', color: 'red'}

assert(car.color === 'beige', "boring colours are exciting in my heart")      // not-so-great output
// previous line means: I want this to be true, here's the error message if they're not

assert.equal(car.color, "beige", "boring colours are exciting in my heart")   // better output
// previous line means: I want these two things equal, here's the error message if they're not
```

Chai has three "styles", fill your boots with whichever one you like, but I like the old boring `assert` style, so I did that.

Even if you're working in modern-ish node (which has an `assert` module built in), and even if you use the `assert` style, you still get some benefit from Chai with slightly nicer assertions and more useful assertion functions.  If you're in a time machine before node had that, or if you like the `expect` style or the `should` style, then Chai is even more useful.


## Mocha

https://mochajs.org/#table-of-contents

Mocha is a "test runner"
* discovers tests
* organizes tests
* formats output

Note that the way we write our mocha tests, with `it` and `describe`, will by default only work when running from mocha's CLI tool.  I'm sure there's some way to change that, but I've never bothered to figure it out.

PS, remember that after you install mocha, unless you install it globally (which I don't recommend), then it won't be on your $PATH, so you'll probably want to
* put `"test": "mocha"` in the `scripts` section of your `package.json`
* call it with `npm test`
* or in my case, because I wanted to control the directory it looked in, I was doing `npm test step3`

# Philosophy again

1/ in the large, remember that good testing involves thinking adversarially.  don't just write tests that pass; write tests that *test*.

2/ in the small, remember that getting a test to green is not the goal (of writing a test).  the goal is a test that is-green-when-it-should-be.  a fire alarm that never goes off is a very poor fire alarm.

3/ oh, and it's nice when some of your tests are very *specific* (in particular, unit tests should usually be very specific; integration/end-to-end tests are much less specific)


# assert.throws

I said a bunch more, but the short version is, think about wrapping things in functions to delay execution.

```
assert.throws(() => iThrow());
```
