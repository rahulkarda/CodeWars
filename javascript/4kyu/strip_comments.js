/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

//Answer

function solution(input, markers) {
    let comments = input.split('\n');
    for (let i in markers) {
        for (let j in comments) {
            let line = null;
            let s = comments[j].indexOf(markers[i]);
            if (s >= 0) {
                comments[j] = comments[j].substring(0, s).trim();
            }
        }
    }
    return comments.join('\n');
}