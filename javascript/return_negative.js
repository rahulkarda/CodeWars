/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? The number can be negative already, in which case no change is required. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

//Answer

function makeNegative(num) {
    if(num < 0){
      return num;
    }else{
      return -num;
    }
  }