class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array, start, end) {
    this.root = Tree.buildTree(array, start, end);
  }
  static buildTree(array, start, end) {
    if(start > end) return null;
    let mid = parseInt(Math.floor(start + end) / 2);
    let node = new Node(array[mid]);
    node.left = Tree.buildTree(array, start,mid - 1);
    node.right = Tree.buildTree(array, mid + 1, end);
    return node;
  }
}


// function bST(array, start, end) {
// if(start > end) return null;
// let mid = parseInt(Math.floor(start + end) / 2);
// let node = new Node(array[mid]);
// node.left = bST(array, start,mid - 1);
// node.right = bST(array, mid + 1, end);
// return node;
// }
// mid 2
const tester = [1,2,3,4,5,6,7,8,9,11,12]
const n = tester.length - 1;
const myTree = new Tree(tester, 0, n);
console.log(myTree);
console.log(myTree.root.left.left.right);
// let treeOne = new NodeTree(node.data, node.left, node.right)
// let newTree = bST(tester, 0, n);
// console.log(newTree, 'newTreeb4class');
// let treeOne = new NodeTree(newTree.data, newTree.left, newTree.right)
// console.log(newTree.left, 'newtree');
// console.log(treeOne, 'treeuno');


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

// prettyPrint(treeOne);