class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}


function bST(array, start, end) {
if(start > end) return null;
let mid = parseInt(Math.floor(start + end) / 2);
let node = new Node(array[mid]);
node.left = bST(array, start,mid - 1);
node.right = bST(array, mid + 1, end);
return node;
}
// mid 2
const tester = [1,2,3,4,5,6,7]
const n = tester.length - 1;
let newTree = bST(tester, 0, n);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
prettyPrint(newTree);