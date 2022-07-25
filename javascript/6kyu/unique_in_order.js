/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/


//Answer

var uniqueInOrder = function (iterable) {
  let numArr = [];
  let intFlag = 0;
  if (typeof iterable == "string") {
    iterable = iterable.split("");
  } else if (typeof iterable[0] == "number") {
    intFlag = 1;
  }
  for (let i = 0; i < iterable.length; i++) {
    iterable.forEach((el, ind) => {
      if (iterable[ind] == iterable[ind + 1]) {
        iterable[ind + 1] = "";
      }
    });
    iterable = iterable.join("").split("");
  }
  if (intFlag) {
    iterable.forEach((el) => {
      numArr.push(parseInt(el));
    });
    return numArr;
  }
  return iterable;
};
