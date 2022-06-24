/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/


//Answer

function isSortedAndHow(array) {
  function isAscending(arr) {
    return arr.slice(1).every((num, i) => num >= arr[i]);
  }
  function isDescending(arr) {
    return arr.slice(1).every((num, i) => num <= arr[i]);
  }
  if (isAscending(array) == true) {
    return "yes, ascending";
  } else if (isDescending(array) == true) {
    return "yes, descending";
  } else {
    return "no";
  }
}
