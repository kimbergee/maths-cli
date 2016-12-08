#!/usr/bin/env node

var userArgs = process.argv.slice(2);
var userInput = userArgs.join('');
var onlyAllowed = /[^\d\+\-\*\/\%]/;

if (userInput.match(onlyAllowed) === null) {
  var answer = eval(userInput);
  console.log(answer);
  if (userArgs.length > 1) {
    console.log("For better performance, do not use any spaces, or wrap your calculations in quotes.");
  }
} else {
  console.log("This calculator only accepts numbers, +, -, *, /, % as input. If you are multiplying, make sure there are no spaces.");
}
