// javascript closure
// ankit k sharma
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// Remember self-invoking functions is called closure.

function outer(value) {
  var a = 10;
  function inner() {
    console.log(a, value);
  }
  return inner;
}
// outer()()
var outFn = outer("Ankit");
outFn();
