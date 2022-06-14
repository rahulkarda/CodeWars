/*
A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

//Answer

function isNarcissistic(n) {
    let num = n,digit,sum = 0;
    let len = n.toString().length;
    console.log(len)
    while(num!=0){
    digit = num%10;
    sum += digit**len;
    num = Math.floor(num/10);
    }
    return (n == sum) ? true : false;
}
console.log(isNarcissistic(9))