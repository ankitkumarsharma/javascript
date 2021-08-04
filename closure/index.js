// javascript closure
// ankit k sharma

function outer(value) {
    var a = 10;
    function inner() {
       console.log(a, value)  
    }
    return inner;
}
// outer()()
var outFn = outer("Ankit");
outFn();