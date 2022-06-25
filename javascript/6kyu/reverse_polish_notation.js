/*
Finish the solvePostfix function. The input will be a postfix string and for ease the character will be seperated by a space. The function should return a Number. The solvePostfix function with the input string 12 4 * 2 ^ 5 + Should return 2309. Operators Types = (^,*,/,+,-). For more information on how to solve RPN read Reverse Polish Notation on wikipedia.

Note: for simplicity's sake, assume that the "/" operator behaves like it usually does in the chosen language: float division in JS and C#, integer division in both Ruby and Python 2 (or "//" in python 3).

*/

//Answer

function solvePostfix(pfx) {
  let expr = pfx.split(" ");
  let stack = [];
  if (expr === "") {
    return 0;
  }

  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (expr[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expr[i] === "-") {
        stack.push(parseInt(b) - parseInt(a));
      } else if (expr[i] === "*") {
        stack.push(parseInt(a) * parseInt(b));
      } else if (expr[i] === "/") {
        stack.push(parseInt(b) / parseInt(a));
      } else if (expr[i] === "^") {
        stack.push(Math.pow(parseInt(b), parseInt(a)));
      }
    }
  }

  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
}
