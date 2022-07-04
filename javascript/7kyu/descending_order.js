/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/


//Answer

function descendingOrder(n) {
  let num = [];
  if (n <= 10) {
    return n;
  }
  while (n != 0) {
    let digit = n % 10;
    num.push(digit);
    n = Math.trunc(n / 10);
  }
  return Number(num.sort((a, b) => b - a).join(""));
}
