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
  find(val, currentNode) {
    if (currentNode === undefined) {
      currentNode = this.root;
    }
    if (currentNode === null) {
      return false;
    }
    if (val === currentNode.data) {
      return currentNode;
    } else if (val < currentNode.data) {
      return this.find(val, currentNode.left);
    } else if (val > currentNode.data) {
      return this.find(val, currentNode.right);
    } else {
      return false;
    }
  }

  insert(val, currentNode) {
    if (currentNode === undefined) {
      currentNode = this.root;
    }
    if (val < currentNode.data) {
      if (currentNode.left === null) {
        return (currentNode.left = new Node(val));
      }
      currentNode = currentNode.left;
      return this.insert(val, currentNode);
    } else {
      if (currentNode.right === null) {
        return (currentNode.right = new Node(val));
      }
      currentNode = currentNode.right;
      return this.insert(val, currentNode);
    }
  }
  delete(val, currentNode) {
    /*say i wanat to delete 4, which has a right child of 5.
    first ill have to traverse down and find 4, if its not there error.
    ok i found 4, if 4 . left and right = null, i delete node 4, also got to set the previous nodes
    next node to null. so wahtever val was connected to that node, set the connection to null

    but if left and right != null, this mean there r nodes after the delete val.
    in this case, ill have to set the connect above delete val, link it to the val delete was connected


    */
    console.log("HERE!!!!!!!!!!", this.find(val));
  }
}
const tester = [4, 5, 6, 8, 9];
const n = tester.length - 1;
const myTree = new Tree(tester);
console.log(myTree);
myTree.delete(9);
// myTree.view();
// myTree.insert(7);
// myTree.insert(9);
// myTree.insert(1);
// myTree.insert(-20);
// setTimeout(() => {
//   console.log(myTree.view());
// }, 3000);

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

prettyPrint(myTree.root);
