/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true 

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing 
*/


//Answer

function comp(array1, array2) {
    if (array1 === [] && array2 === [] || array1 === null && array2 === null) {
        return true;
    }
    else if (array1 === null && array2 !== null || array1 !== null && array2 === null) {
        return false;
    }
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    let unequalElements = 0;
    array1.forEach((el, ind) => {
        if (el * el !== array2[ind]) {
            unequalElements += 1;
        }
    })
    if (unequalElements > 0) {
        return false;
    }
    else {
        return true;
    }
}
console.log(comp(null, [1, 2]))