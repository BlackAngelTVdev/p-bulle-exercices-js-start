//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @ts-check

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._count = 0;
  }

  // AJOUTER à la fin
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._count++;
  }

  // RETIRER à la fin
  pop() {
    if (!this.tail) return null;
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this._count--;
    return value;
  }

  // RETIRER au début
  shift() {
    if (!this.head) return null;
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this._count--;
    return value;
  }

  // AJOUTER au début
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this._count++;
  }

  // SUPPRIMER une valeur spécifique
  delete(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.shift();
        } else if (current === this.tail) {
          this.pop();
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this._count--;
        }
        return; 
      }
      current = current.next;
    }
  }

  count() {
    return this._count;
  }
}