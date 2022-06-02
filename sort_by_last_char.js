/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
*/


//Answer

function last(x){
    x = x.split(' ');
    return x.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
