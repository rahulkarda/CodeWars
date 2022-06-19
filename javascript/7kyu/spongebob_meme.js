/*
You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"

*/

//Answer

function spongeMeme(sentence) {
    sentence = sentence.split('');
    sentence.forEach((el, ind) => {
        if (ind % 2 == 0) {
            sentence[ind] = el.toUpperCase();

        } else {
            if (el == el.toUpperCase()) {
                sentence[ind] = el.toLowerCase();
            }
        }
    })
    return sentence.join('');
}