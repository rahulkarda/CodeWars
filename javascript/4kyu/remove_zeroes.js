
/*
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
is transformed into
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.
You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

*/

//Answer

function removeZeros(array) {
    let limit = array.length;
    let tmp;
    for (let i = 0; i < limit; i++) {
        if (array[i] === 0 || array[i] === "0") {
            temp = array[i];
            for (let j = i--; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array[array.length - 1] = temp;
            limit--;
        }
    }
    return array;
}