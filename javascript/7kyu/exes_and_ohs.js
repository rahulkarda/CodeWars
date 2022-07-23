/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//Answer

function XO(str) {
  let countOfX = 0;
  let countOfO = 0;
  str = str.split("");
  str.forEach((el) => {
    if (el == "x" || el == "X") {
      countOfX++;
    } else if ((el == "o") | (el == "O")) {
      countOfO++;
    }
  });
  return countOfX == countOfO ? true : false;
}
