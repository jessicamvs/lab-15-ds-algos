const Node = require('./dll-node.js');

const DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    return node.val;
  }

  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  return node.val;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if (!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  }

  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

DoublyLinkedList.prototype.removeHead = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let frontNode = this.head;
    this.head = null;
    return frontNode.val;
  }

  let frontNode = this.head;
  this.head.next = this.head;
  this.head.prev = null;
  return frontNode.val;
};

DoublyLinkedList.prototype.removeTail = function() {
  if(!this.tail) return;

  if(!this.tail.prev) {
    let lastNode = this.tail;
    this.tail = null;
    return lastNode.val;
  }

  let lastNode = this.tail;
  this.tail.prev = this.tail;
  this.tail.next = null;
  return lastNode.val;
};
