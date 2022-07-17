/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/


//Answer

function plus(n) {
  return `+ ${n}`;
}
function minus(n) {
  return `- ${n}`;
}
function times(n) {
  return `* ${n}`;
}
function dividedBy(n) {
  return `/ ${n}`;
}

function zero(s) {
  if (s) {
    return Math.trunc(eval(`0 ${s}`));
  } else {
    return "0";
  }
}
function one(s) {
  if (s) {
    return Math.trunc(eval(`1 ${s}`));
  } else {
    return "1";
  }
}
function two(s) {
  if (s) {
    return Math.trunc(eval(`2 ${s}`));
  } else {
    return "2";
  }
}
function three(s) {
  if (s) {
    return Math.trunc(eval(`3 ${s}`));
  } else {
    return "3";
  }
}
function four(s) {
  if (s) {
    return Math.trunc(eval(`4 ${s}`));
  } else {
    return "4";
  }
}
function five(s) {
  if (s) {
    return Math.trunc(eval(`5 ${s}`));
  } else {
    return "5";
  }
}
function six(s) {
  if (s) {
    return Math.trunc(eval(`6 ${s}`));
  } else {
    return "6";
  }
}
function seven(s) {
  if (s) {
    return Math.trunc(eval(`7 ${s}`));
  } else {
    return "7";
  }
}
function eight(s) {
  if (s) {
    return Math.trunc(eval(`8 ${s}`));
  } else {
    return "8";
  }
}
function nine(s) {
  if (s) {
    return Math.trunc(eval(`9 ${s}`));
  } else {
    return "9";
  }
}
