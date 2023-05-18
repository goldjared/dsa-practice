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
// function mergeSort(array) {
//   if(array.length <= 1) {
//     return;
//   }
//   let mid = Math.ceil(array.length / 2);
//   // let p = array[0]
//   // let q = array[array.length - 1]
//   let left = array.slice(0, mid);
//   console.log('left from ms', left)
//   let right = array.slice(mid, array.length);
//   console.log('right from ms', right)
//   mergeSort(left)
//   mergeSort(right)
//   merge(left, right, array)
//   // return { left, array }
//   return array;
// }

// function merge(leftArray, rightArray, array) {
//   var index = 0;
 
//   while (leftArray.length && rightArray.length) {
//     console.log('array is: ', array);
//     if (rightArray[0] < leftArray[0]) {
//       array[index++] = rightArray.shift();
//     } else {
//       array[index++] = leftArray.shift();
//     }
//   }
  
//   while (leftArray.length) {
//     console.log('left array is: ', leftArray);
//     array[index++] = leftArray.shift();
//   }
  
//   while (rightArray.length) {
//     console.log('right array is: ', rightArray);
//     array[index++] = rightArray.shift();
//   }

//   console.log('** end of merge function ** array is: ', array);
// }

// // console.log(mergeSort([8,7,6,5,4,3,2,1]))
// const xArr = [5, 4,3,2,1]
// console.log(mergeSort(xArr))

function mergeSort(array) {
  /*
  get array
  split the left in half until 1 unit
  split the right in half until 1 unit
  then the merge sort will get called. with the left, and the right. it will sort them. 
  */
  if(array.length <= 1) {
    return;
  }
  let mid = Math.ceil(array.length / 2);
  let left = array.slice(0, mid)
  let right = array.slice(mid, array.length)
  mergeSort(left)
  mergeSort(right)
  merge(left, right, array);
  // return { left, mid, right }
  return array;
}

function merge(l,r,array) {
console.log('left', l)
console.log('right', r)
console.log('array', array)
  var index = 0;
 
  while (l.length && r.length) {
    console.log('array is: ', array);
    if (r[0] < l[0]) {
      array[index++] = r.shift();
    } else {
      array[index++] = l.shift();
    }
  }
  
  while (l.length) {
    console.log('left array is: ', l);
    array[index++] = l.shift();
  }
  
  while (r.length) {
    console.log('right array is: ', r);
    array[index++] = r.shift();
  }

  console.log('** end of merge function ** array is: ', array);

}

console.log(mergeSort([5,4,3,2,1]))