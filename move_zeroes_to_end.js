/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Example - 
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

//Answer

function moveZeros(arr) {
    let numOfZeroes = 0;
    arr.forEach(el => (el === 0) ? numOfZeroes++ : '');
    arr = arr.filter(el => (el !== 0));
    for (let i = 0; i < numOfZeroes; i++) {
        arr.push(0);
    }
    return arr;
}