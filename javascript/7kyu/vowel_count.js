/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//Answer

function getCount(str) {
    let vowelsCount = 0;
    str = str.split('');
    str.forEach(el => (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') ? vowelsCount++ : '');
    return vowelsCount;
}