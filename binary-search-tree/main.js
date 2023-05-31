/*
pseudo:
root node = middle arr
base is if start > end
parameters is array, start, end
[4,2 ,7, 3]
well do array 0 - array.length-1 = mid
create tree node with mid = root
recursion on left arr which is start to mid-1
recursion on right arr mid+1, end
*/

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

// class Tree {
//   constructor(rootArray) {
//     this.root = rootArray[0];
//     this.left = rootArray[1];
//     this.right = rootArray[2];
//   }
// }

function bST(array, start, end) {
if(start > end) return null;
let mid = parseInt(Math.floor(start + end) / 2);
let node = new Node(array[mid]);
node.left = bST(array, start,mid - 1);
node.right = bST(array, mid + 1, end);
return node;
}
// mid 2
const tester = [7, 66, 33, 22, 10, 8, 3, 01, 'h']
const n = tester.length - 1;
console.log(bST(tester, 0, n))