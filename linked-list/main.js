/*
You will need two classes or factories:

LinkedList class / factory, which will represent the full list.
Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
Build the following functions in your linked list class:

append(value) adds a new node containing value to the end of the list
prepend(value) adds a new node containing value to the start of the list
size returns the total number of nodes in the list
head returns the first node in the list
tail returns the last node in the list
at(index) returns the node at the given index
pop removes the last element from the list
contains(value) returns true if the passed in value is in the list and otherwise returns false.
find(value) returns the index of the node containing value, or null if not found.
toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
The format should be: ( value ) -> ( value ) -> ( value ) -> null
Extra Credit
insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index.
Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

*/
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }
  append(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  atIndex() {

  }
  pop() {
    //removes last item in list
  }
  contains(val) {

// contains(value) returns true if the passed in value is in the list and otherwise returns false.
  }
  find(val) {

// find(value) returns the index of the node containing value, or null if not found.
  }
  toString() {
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
// The format should be: ( value ) -> ( value ) -> ( value ) -> null

  }
}


const linkedList1 = new linkedList;
linkedList1.append(99)
linkedList1.append(33)
linkedList1.append(103)
linkedList1.append('spyder')
linkedList1.prepend('hello')
console.log(linkedList1)
// console.log(linkedList1.head.next.next.next.next)
// const test = new Node(69);
// console.log((test));


// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// console.log(new Rectangle(10,5))
// console.log(nodeGen(10))
// console.log('fuck');

