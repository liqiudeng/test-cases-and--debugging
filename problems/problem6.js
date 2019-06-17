// pro tip: use nodemon instead of node
let verifyEquals = require("./verify-equals.js");

// we need 6 test cases.
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 2, 3],
  ["spoof", 10, 10],
  ["sub", 90, 7],
  ["add", 34, 2]
];

let outputs = [30, undefined, 6, undefined, 83, 36];

/*
The function takes an array. The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. 
"mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (arr[0] == "add") return arr[1] + arr[2];
  if (arr[0] == "mult") return arr[1] * arr[2];
  if (arr[0] == "sub") return arr[1] - arr[2];
  else return undefined;
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
console.log("All tests passed for " + __filename);
