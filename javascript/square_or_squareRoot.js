/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/


//Answer
function squareOrSquareRoot(array) {
    array.forEach(e => (e%2===0)? array.push(Math.sqrt(e)) : array.push(e*e) )
    return array;  
  }