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
    });
    it('should add a new node as SLL.head; existing nodes in .next chain', function() {

    });
  });

  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {

    });
    it('should add a new node after the last node', function() {

    });
  });
});
