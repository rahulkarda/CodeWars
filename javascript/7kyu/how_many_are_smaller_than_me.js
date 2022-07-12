/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

*/


//Answer

function smaller(nums) {
  let result = [];
  nums.forEach((el, ind) => {
    let count = 0;
    for (let i = ind + 1; i < nums.length; i++) {
      if (el > nums[i]) {
        count++;
      }
    }
    result.push(count);
  });
  return result;
}
