/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
*/

//Answer

function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let sumOfDiff = 0;
    for(let a = arr.length - 1; a > 0; a--) {
      sumOfDiff += arr[a] - arr[a - 1];
    }
    return sumOfDiff;
}


