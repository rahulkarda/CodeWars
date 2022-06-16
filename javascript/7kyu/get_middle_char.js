/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

*/


//Answer

function getMiddle(s) {
    s = s.split('');
    let result = [];
    if (s.length % 2 == 0) {
        result.push(s[((s.length) / 2) - 1]);
        result.push(s[(s.length / 2)]);
    }
    else {
        result.push(s[(s.length - 1) / 2]);
    }
    return result.join('');
}
