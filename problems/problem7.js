let verifyEquals = require("./verify-equals.js");

// we need 7 test cases.
let inputs = [
  ["go", 2],
  ["fo", 3],
  ["too", 4],
  ["on", 1],
  ["pop", 2],
  ["hi", -3],
  ["so", 0]
];

let outputs = [
  "gogo",
  "fofofo",
  "tootootootoo",
  "on",
  "poppop",
  undefined,
  undefined
];

/*
The function input is an array as input. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
  if (arr[1] <= 0) return undefined;
  var sum = arr[0];
  for (var i = 1; i < arr[1]; i++) sum += arr[0];
  return sum;
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
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);
