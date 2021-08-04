// javascript closure
// ankit k sharma

function outer() {
    var a = 10;
    function inner() {
       console.log(a)  
    }
    return inner;
}
outer()()
// var outFn = outer();
// outFn();