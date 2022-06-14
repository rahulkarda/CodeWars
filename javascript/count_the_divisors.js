/*
Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
*/

//Answer

function getDivisorsCnt(n){
    let divisors = 0;
    for(let i=1;i<=n;i++){
      if(n%i==0){
        divisors += 1;
      }
    }
    return divisors;
}