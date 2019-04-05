let verifyEquals = require('./verify-equals.js');

// we need 5 test cases. 
let inputs = [
  [2, 7]
]

let outputs = [
  14
]

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
    
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
