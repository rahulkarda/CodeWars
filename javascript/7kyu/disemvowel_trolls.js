/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

*/


//Answer

function disemvowel(str) {
    str = str.split('');
    str = str.filter(el => (el != 'a' && el != 'e' && el != 'i' && el != 'o' && el != 'u' && el != 'A' && el != 'E' && el != 'I' && el != 'O' && el != 'U') ? el : '')
    return str.join('');
}

