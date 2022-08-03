/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/


//Answer

function isPangram(string) {
  string = string.toLowerCase();
  const { length } = string;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabets.split("");
  for (let i = 0; i < length; i++) {
    const el = string[i];
    const index = alphaArr.indexOf(el);
    if (index !== -1) {
      alphaArr.splice(index, 1);
    }
  }
  return !alphaArr.length;
}
