/*
Build a function mergeSort that takes in an array and returns a 
sorted array, using a recursive merge sort methodology.
Tips:
Think about what the base case is and what behavior is happening 
again and again and can actually be delegated to someone else (e.g. that same method!).
It may be helpful to check out the background videos again if 
you don’t quite understand what should be going on.
*/
/*
pseudo:
split arrays until 1 unit, if 1 unit, call merge with left, and the other side array.

merge func (left, right)
*/
function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let mid = (array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return { left, right }
  // mergeSort(array.length / 2)
}

function merge(l, r) {
  return (l < r ? [l,r] : [r,l]);
}

// console.log(mergeSort([8,7,6,5,4,3,2,1]))
const xArr = [4,3,2,1]
console.log(mergeSort(xArr))