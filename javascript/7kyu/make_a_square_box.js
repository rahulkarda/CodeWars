/*
Easy; Make a box
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]

*/
//Answer

function box(n) {
    let arr = [];
    let string = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                string += "-";
            }
            else {
                if (j === 0 || j === n - 1) {
                    string += "-";
                }
                else {
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    arr.push(string);
    arr = arr.join('').split('\n');
    arr.pop();
    return arr;
}
