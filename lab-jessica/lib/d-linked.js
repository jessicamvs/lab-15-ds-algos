'use strict';

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
  let removedNode = this.head;

  if(!this.head) return;

  if(!this.head.next) {
    this.head = null;
    this.tail = null;
    return removedNode.val;
  }

  this.head = this.head.next;
  this.head.prev = null;
  return removedNode.val;
};

DoublyLinkedList.prototype.removeTail = function() {
  let removedNode = this.tail;

  if(!this.tail) return;

  if(!this.tail.prev) {
    this.tail = null;
    this.head = null;
    return removedNode.val;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
  return removedNode.val;
};

DoublyLinkedList.prototype.reverse = function() {

  if(!this.head) return;

  if(!this.head.next) return this.head.val;

  let lastNode;
  this.tail = this.head;

  _setLastNode(this.head);
  this.head = lastNode;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
    _swapPrevNext(node);
  }

  function _swapPrevNext(node) {
    const currPrev = node.prev;
    const currNext = node.next;

    node.next = currPrev;
    node.prev = currNext;
  }

  return this.head.val;
};
