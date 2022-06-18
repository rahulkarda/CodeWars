/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

*/

//Answer

function isAlt(str) {

    function isVowel(c) {
        let vowels = ["a", "e", "o", "i", "u"];
        return vowels.includes(c);
    }

    for (i = 0; i < str.length - 1; i++) {
        if (isVowel(str[i]) == isVowel(str[i + 1])) {
            return false;
        }
    }
    return true;
}
