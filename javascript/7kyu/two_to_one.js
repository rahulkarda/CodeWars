/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/


//Answer

function longest(s1, s2) {
  let longestStr = s1 + s2;
  let longest = longestStr.split("");
  let longestStrUnique = [...new Set(longest)].sort();
  return longestStrUnique.join("");
}
