/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/


//Answer

function sevenAte9(str) {
  str = str.split("");
  str = str.filter((el, ind) => {
    if (el == 9 && str[ind + 1] == 7 && str[ind - 1] == 7) {
    } else {
      return el;
    }
  });
  return str.join("");
}
