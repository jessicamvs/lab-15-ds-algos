const Node = require('./sll-node.js');

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null;
  if (Array.isArray(arr)) arr.forEach(val => this.append(val));
};

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SinglyLinkedList.prototype.removeHead = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let frontNode = this.head;
    this.head = null;
    return frontNode.val;
  }

  let frontNode = this.head;
  this.head = this.head.next;
  return frontNode.val;
};

SinglyLinkedList.prototype.removeTail = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let lastNode = this.head;
    this.head = null;
    return lastNode.val;
  }

  let secondToLastNode = null;
  _setSecondToLastNode(this.head);


  let lastNode = secondToLastNode.next;
  secondToLastNode.next = null;

  function _setSecondToLastNode(node) {
    if(!node.next) return;

    secondToLastNode = node;
    _setSecondToLastNode(node.next);
  }

  return lastNode.val;
};
