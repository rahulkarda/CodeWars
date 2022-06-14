/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

//Answer

function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
      if(el == '-' || el == '_'){
        el = str[i+1].toUpperCase();
        str.splice(i+1, 1);
      }
      return el;
    }).join('');
}
  