'use strict';

const expect = require('chai').expect;
const DLL = require('../lib/d-linked.js');

describe('Doubly Linked List', function() {
  describe('prepend()', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should create a new node as head and tail when list is empty', function() {
      expect(dll.head).to.not.exit;
      dll.prepend(45);
      expect(dll.head.val).to.equal(45);
      expect(dll.tail.val).to.equal(45);
    });

    it('assigns current head to new node\'s next', function() {
      expect(dll.head.val).to.equal(45);
      dll.prepend(10);
      expect(dll.head.next.val).to.equal(45);
    });

    it('assigns new node to current head\'s prev', function() {
      expect(dll.head.val).to.equal(10);
      dll.prepend(5);
      expect(dll.head.next.prev.val).to.equal(5);
    });
  });

  describe('append()', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should create a new node as head and tail when list is empty', function() {
      expect(dll.head).to.not.exit;
      dll.append(2);
      expect(dll.head.val).to.equal(2);
      expect(dll.tail.val).to.equal(2);
    });


    it('should assign current tail to new node\'s prev and reassign new node to tail', function() {
      expect(dll.tail.val).to.equal(2);
      dll.append(5);
      expect(dll.tail.prev.val).to.equal(2);
      expect(dll.tail.val).to.equal(5);
    });

    it('should return the value of the appended node', function() {
      expect(dll.append(89)).to.equal(89);
    });
  });

  describe('removeHead()', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    // DoublyLinkedList.prototype.removeHead = function() {
    //   if(!this.head) return;
    //
    //   if(!this.head.next) {
    //     let frontNode = this.head;
    //     this.head = null;
    //     return frontNode.val;
    //   }
    //
    //   let frontNode = this.head;
    //   this.head.next = this.head;
    //   this.head.prev = null;
    //   return frontNode.val;
    // };
    //
    it('should result in an empty list when list has one node', function() {
      dll.append(5);
      expect(dll.head.next).to.not.exist;
      dll.removeHead();
      expect(dll.head).to.not.exist;
      expect(dll.tail).to.not.exist;
    });

    it('should assign current head\'s next to head', function() {
      dll.append(27);
      dll.append(15);
      expect(dll.head.next.val).to.equal(15);
      console.log('before removal', dll.head.val);
      dll.removeHead();
      console.log('after removal', dll.head.val);
      expect(dll.head.val).to.equal(15);
    });

    it('should return the value of the removed node', function() {
      expect(dll.removeHead()).to.equal(27);
    });
  });

  describe('removeTail()', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('', function() {

    });

    it('', function() {

    });

    it('', function() {

    });
  });
});
