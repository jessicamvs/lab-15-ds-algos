'use strict';

const expect = require('chai').expect;
const SLL = require('../lib/s-linked.js');

describe('Singly Linked List', function() {
  describe('prepend()', function() {
    let sll;

    before(() => {
      sll = new SLL();
    });

    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
      expect(sll.head.next).to.equal(null);
    });

    it('should replace SLL.head with new node and reassign old head to new head\'s next', function() {
      expect(sll.head).to.exist;
      sll.prepend(50);
      expect(sll.head.val).to.equal(50);
      expect(sll.head.next.val).to.equal(25);
    });

    it('should return the value of the prepended node', function() {
      expect(sll.prepend(2)).to.equal(2);
    });
  });

  describe('append()', function() {
    let sll;

    before(() => {
      sll = new SLL();
    });

    it('should add a new node as SLL.head when list is empty and return appended val', function() {
      expect(sll.head).to.equal(null);
      expect(sll.append(1)).to.equal(1);
      expect(sll.head.val).to.equal(1);
      expect(sll.head.next).to.equal(null);
    });

    it('should add a new node after the last node', function() {
      sll.append(5);
      expect(sll.head.val).to.equal(1);
      expect(sll.head.next.val).to.equal(5);
    });

    it('should return the value of the appended node', function() {
      expect(sll.append(10)).to.equal(10);
    });
  });

  describe('removeHead()', function() {
    let sll;

    before(() => {
      sll = new SLL();
    });

    it('should result in empty list if only one item in list', function() {
      sll.append(1);
      expect(sll.head.next).to.not.exist;
      sll.removeHead();
      expect(sll.head).to.not.exist;
    });

    it('should reassign head to current head\'s next', function() {
      sll.append(5);
      sll.append(8);
      expect(sll.head.val).to.equal(5);
      sll.removeHead();
      expect(sll.head.val).to.equal(8);
    });

    it('should return the value of the removed node', function() {
      expect(sll.head.val).to.equal(8);
      expect(sll.removeHead()).to.equal(8);
    });
  });

  describe('removeTail()', function() {
    let sll;

    before(() => {
      sll = new SLL();
    });

    it('should result in an empty list if there is only one item in list', function() {
      sll.append(1);
      expect(sll.head.next).to.not.exist;
      sll.removeTail();
      expect(sll.head).to.not.exist;
    });

    it('should not affect current head', function() {
      sll.append(1);
      sll.append(2);
      expect(sll.head.val).to.equal(1);
      sll.removeTail();
      expect(sll.head.val).to.equal(1);
    });

    it('should return the value of the removed node', function() {
      sll.append(5);
      expect(sll.head.val).to.equal(1);
      expect(sll.removeTail()).to.equal(5);
    });
  });
});
