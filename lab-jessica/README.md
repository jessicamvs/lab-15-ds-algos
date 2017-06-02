# Data Structures - Linked Lists

In this project I have implemented the Singly Linked List (SLL) and Doubly Linked List (DLL) data structures which can be found in their own modules in the lib directory along with their respective node modules. Singly linked lists are only aware of their head node and their nodes are only aware of the next node. Double linked lists are aware of both their head and tail nodes and their nodes are aware of the previous and next node making it easier to traverse the list.

## SLL Node Module

Instantiate a new node `new Node(val)`

#### Properties

```
{
  this.val = val;
  this.next = null;
};
```

## SLL Module

Instantiate a singly linked list ```new SinglyLinkedList([arr])```

Passing in an array is optional. If passed in, each value will be appended to the list.

#### Properties

```
{
  this.head = null;
};
```

#### SLL Methods

`.prepend(val)` - Adds a new node with a value of `val` to the the front of the list. Returns value of prepended node.

`.append(val)` - Adds a new node with a value of `val` to the the end of the list. Returns value of appended node.

`.removeHead()` - Removes the head of the list and returns the value of the removed node.

`.removeTail()` - Removed the last node in the list and returns the value of the removed node.

## DLL Node Module

Instantiate a new node `new Node(val)`

#### Properties

```
{
  this.val = val;
  this.prev = null;
  this.next = null;
};
```

## DLL Module

Instantiate a doubly linked list ```new DoublyLinkedList()```

#### Properties

```
{
  this.head = null;
  this.tail = null;
};
```

#### DLL Methods

`.prepend(val)` - Adds a new node with a value of `val` to the the front of the list. Returns val of prepended node.

`.append(val)` - Adds a new node with a value of `val` to the the end of the list. Returns value of appended node.

`.removeHead()` - Removes the head of the list and returns the value of the removed node.

`.removeTail()` - Removed the last node in the list and returns the value of the removed node.

`.reverse()` - Reverses the order of the list. Head becomes tail and tail becomes head.
