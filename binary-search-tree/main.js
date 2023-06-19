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
  deleteRec(value, node) {
    if (node === null) {
      return node;
    }

    if (value < node.data) {
      node.left = this.deleteRec(value, node.left);
      return node;
    } else if (value > node.data) {
      node.right = this.deleteRec(value, node.right);
      return node;
    }

    if (value === node.data) {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
    }
    node.right = this.lift(node.right, node);
  }
  lift(node, nodeToDelete) {
    if (node.left) {
      node.left = this.lift(node.left, nodeToDelete);
      return node;
    } else {
      nodeToDelete.data = node.data;
      return node.right;
    }
  }
  levelOrder(root) {
    const levels = [];

    if (!root) {
      return levels;
    }

    const queue = [root];
    while (queue.length) {
      const queueLength = queue.length;
      const level = [];

      for (let i = 0; i < queueLength; i++) {
        const node = queue.shift();

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }

        level.push(node.data);
      }
      levels.push(level);
    }
    return levels;
  }
  inOrder(root, fn) {
    if (root === null) {
      return;
    }
    this.inOrder(root.left, fn);
    if(Array.isArray(fn)) {
      fn.push(root.data)
    } else {
      fn(root);
    }
    this.inOrder(root.right, fn);
    
    if(Array.isArray(fn)) return fn;
  }

  preOrder(root, fn) {
    if (root === null) {
      return;
    }
    fn(root);
    this.preOrder(root.left, fn);
    this.preOrder(root.right, fn);
  }
  postOrder(root, fn) {
    if (root === null) {
      return;
    }

    this.postOrder(root.right, fn);
    this.postOrder(root.left, fn);
    fn(root);
  }
  height(root) {
    if (root === null) {
      return -1;
    }
    let leftTree = this.height(root.left);
    // console.log(leftTree, "ltree");
    let rightTree = this.height(root.right);
    // console.log(rightTree, "rtree")
    return Math.max(leftTree, rightTree) + 1;
  }
  depth(root) {
    if(root === null) return -1;
    let left = this.depth(root.left)
    // console.log(left, 'left');
    let right = this.depth(root.right)
    // console.log(right, 'right');
    return Math.max(left, right) + 1;
  }
  isBalanced(root) {
    if(root === null) {
      return true;
    }
    let left = this.height(root.left)
    let right = this.height(root.right)
    if(Math.abs(left - right) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right)) {
      return true;
    } else {
      return false;
    }
  }
  rebalance() {
   let balancedArray = this.inOrder(this.root, [])
   return new Tree(balancedArray)

  }

}
const tester = [4, 5, 9, 10, 11,12,13,14,144,443,223,123];
let myTree = new Tree(tester);
console.log(myTree.root, 'here root');
myTree.insert(343)
myTree.insert(843)
myTree.insert(911)
console.log(myTree.isBalanced(myTree.root), 'should be false, isBalanced');
// console.log(myTree.rebalance(myTree));

function testFunc(node) {
  // think i will change this to a 'printer' func
  return node;
}
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
myTree = myTree.rebalance();
setTimeout(() => {
  prettyPrint(myTree.root)
}, 2000)

