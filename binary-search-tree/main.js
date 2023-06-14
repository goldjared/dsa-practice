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
    const levels = []

    if(!root) {
        return levels
    }

    const queue = [root]
    while (queue.length){
       const queueLength = queue.length
       const level = []

       for(let i = 0; i < queueLength; i++){

           const node = queue.shift()

           if(node.left){
               queue.push(node.left)
           }
           if(node.right){
               queue.push(node.right)
           }

           level.push(node.data)
       }
       levels.push(level)
   }
    return levels
    
  }
  inOrder(root, fn) {
    /*
    traverse left subtree
    visit root
    traverse right subtree

    */
   if(root === null) {
    return;
   }
   this.inOrder(root.left, fn)


   fn(root);
   this.inOrder(root.right, fn)
  }
  // for funcs that pass nodes to a func parameter, and if no func parameter, returns an array of func
  // i think to if func param === undefined, then func param = []
  // then again in bottom, if func p isarray, then return func.p.push(node)
}
const tester = [4, 5, 6, 8, 9, 10, 11, 12];
// const n = tester.length - 1;
const myTree = new Tree(tester);
console.log(myTree.inOrder(myTree.root, testFunc));
// setTimeout(() => {
//   prettyPrint(myTree, 'should be gone?');
// }, 2000);
function testFunc(node) {
  return console.log(node.data, 'test func, nodeLog')

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
