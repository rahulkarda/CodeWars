/*
Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/


//Answer

function findEvenIndex(arr) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    let start = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    let end = arr.slice(i).reduce((a, b) => a + b, 0);
    if (start === end) {
      index = i;
    }
  }
  return index;
}
