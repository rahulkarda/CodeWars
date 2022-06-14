/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

Example - 
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

//Answer

function twoSum(numbers, target) {
    let resultArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                resultArr.push(i);
                resultArr.push(j);
            }
        }
    }
    return resultArr;
}