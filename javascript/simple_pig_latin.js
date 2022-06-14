/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//Answer

function pigIt(str) {
    str = str.split(' ');
    let newString = '';
    let spaceStr = ' ';
    str.forEach((el, ind) => {
        el = el.split('');
        if (el != '!' && el != '?') {
            let fLetter = el[0];
            el.shift();
            el.push(fLetter);
            el.push('a');
            el.push('y');
            newString += `${el.join('')}${spaceStr}`;
        } else {
            newString += `${el.join('')}${spaceStr}`;
        }
    })
    return newString.trim();
}