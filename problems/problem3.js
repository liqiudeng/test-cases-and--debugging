let verifyEquals = require("./verify-equals.js");

// we need 7 test cases. I've provided 2.
let inputs = [[2, 4], [-3, 3], 3, [2, -5], [0, 8], [9, -3], [23, 34]];

let outputs = [6, 0, undefined, -3, 8, 6, 57];

/*
Make this function return the sum of the two numbers that are passed to it. 
If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length !== 2) return undefined;
  let sum = 0;
  for (var i = 0; i < input.length; i++) sum += input[i];

  return sum;
}

function runTest(i) {
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);
