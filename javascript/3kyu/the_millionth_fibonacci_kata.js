/*
In this kata you will have to calculate fib(n) where:

fib(0) := 0
fib(1) := 1
fin(n + 2) := fib(n + 1) + fib(n)
Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4

*/


//Answer

function fib(n) {
  let cache = { 0: 0n, 1: 1n, 2: 1n, 3: 2n };
  if (n < 0 && n % 2 == 0) {
    return -fib(Math.abs(n));
  } else if (n < 0 && n % 2 != 0) {
    return fib(Math.abs(n));
  } else {
    if (cache[n] === undefined) {
      if (n % 2) {
        let f1 = fib((n - 1) / 2);
        let f2 = fib((n + 1) / 2);
        cache[n] = f1 ** 2n + f2 ** 2n;
      } else {
        let f1 = fib(n / 2 - 1);
        let f2 = fib(n / 2);
        cache[n] = (2n * f1 + f2) * f2;
      }
    }
  }
  return cache[n];
}
