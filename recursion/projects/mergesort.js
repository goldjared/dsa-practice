/*
Build a function mergeSort that takes in an array and returns a 
sorted array, using a recursive merge sort methodology.
Tips:
Think about what the base case is and what behavior is happening 
again and again and can actually be delegated to someone else (e.g. that same method!).
It may be helpful to check out the background videos again if 
you don’t quite understand what should be going on.
*/
function mergeSort(array) {
  /*
  get array [4,3,2,1]
  split it
  split the left split [4,3]
  [4] [3]
  split left, 1 cannot be split.
  ready for merge, merge selects [4] and [3]
  get smaller of 2 val, add smaller back to array, when array is empty, add remaining back to array.
  [3,4] merge done
  get right side of array [2,1]
  split it [2] [1]
  split left, 1 cannot be split.
  ready for merge, merge selects [2] and [1]
  get smaller of 2 val, ...
  [1, 2] merge done
  merge [3,4] and [1,2]
  get 3 and 1
  1
  get 3 and 2
  1,2
  */

 if(array.length === sorted.length) {
  return;
 }
 
const half = Math.floor(array.length / 2);
// const left = array.slice(0, half);
}

// console.log(mergeSort([8,7,6,5,4,3,2,1]))
console.log('wasabi')