let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [[2, 7], [3, 4], [0, 8], [11, 2], [-5, 3]];

let outputs = [14, 12, 0, 22, -15];

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. If the input array length is not 2,
 or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (input.length !== 2) return undefined;
  if (!typeof input == "number") return undefined;
  return input[0] * input[1];
}
function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename);
