/*
In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything (42), according to Freud. Note that an empty string, or no arguments, should return an empty string.
*/

//Answer

function toFreud(string) {
    if(string === ''){
      return '';
    }
    let result = string.split(' ');
    result.forEach((el,ind) => {
        result[ind] = "42";
    })
    result =  result.join(' ');
    return result;
}