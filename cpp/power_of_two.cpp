/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

//Answer

#include <vector>
#include <cstdint>
#include <math.h>

std::vector<uint64_t> powers_of_two(int n) {
  std::vector<uint64_t> pow_of_two;
  for(int i = 0; i<=n;i++){
    long long int power = pow(2,i);
    pow_of_two.push_back(power);
  }
  return pow_of_two;
}
