let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["abc", "cba", "hello", "goodby", ""];

let outputs = ["c", "a", "o", "y", undefined];

// Make this function return the last letter of the string that is passed to it. 
//If the string does not have a last letter, return undefined
function f(str) {
  if(str === "") return undefined;
  else 
  return str[str.length-1];
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
console.log("All tests passed for " + __filename);
