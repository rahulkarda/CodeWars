/*
Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.

*/


//Answer

function swapVowelCase(str) {
  str = str.split("");
  let newArr = [];
  str.forEach((el, ind) => {
    if (el == "a" || el == "e" || el == "i" || el == "o" || el == "u") {
      newArr[ind] = el.toUpperCase();
      console.log(newArr[ind]);
    } else if (el == "A" || el == "E" || el == "I" || el == "O" || el == "U") {
      newArr[ind] = el.toLowerCase();
    } else {
      newArr[ind] = el;
    }
  });
  return newArr.join("");
}
