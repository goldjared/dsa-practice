class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array) {
    this.root = Tree.buildTree(array, 0, array.length - 1);
  }
  static buildTree(array, start, end) {
    if (start > end) return null;
    let mid = parseInt(Math.floor(start + end) / 2);
    let node = new Node(array[mid]);
    node.left = Tree.buildTree(array, start, mid - 1);
    node.right = Tree.buildTree(array, mid + 1, end);
    return node;
  }

  view() {
    console.log(this);
  }

  insert(val, currentNode) {
    if(currentNode === undefined) {
      currentNode = this.root;
    }
    console.log(currentNode);
    // console.log(currentNode.left, 'here is Cn.left');

    //error for val = currentNode?
    /*
     if val < current node, go left, else go right. 
     keep doing this until we hit leaf (e.g the left and right is null)
     then if value is < leaf, make left child of leaf, else make right child leaf
    */
    if (val < currentNode.data) {
      //LEFT
      //check if left node is leaf. if true, add child
      if (currentNode.left === null) {
        return (currentNode.left = new Node(val));
      }
      // if not, check if val is less than node, if true, go left, if not, go right
      currentNode = currentNode.left;
      return this.insert(val, currentNode);
      // return console.log('fuck1')
      // check if ode is leaf, if true, add child, if not,
      // check if val is less than node, if true, go left, if not, go right
    } else {
      if (currentNode.right === null) {
        return (currentNode.right = new Node(val));
      }
      // if not, check if val is less than node, if true, go left, if not, go right
      currentNode = currentNode.right;
      return Tree.insert(val, currentNode);

      return console.log("fuck2");
      //opposite of above, this is RIGHT
    }
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
const tester = [4, 5, 6];
const n = tester.length - 1;
const myTree = new Tree(tester);
// console.log(myTree);
// myTree.view();
myTree.insert(3);
setTimeout(() => {console.log(myTree.root.left.left);}, 3000);
// console.log(myTree.root.left.left.right);
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

// prettyPrint(myTree);
