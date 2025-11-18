// ===== Queue =====
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.tail) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.head === null;
  }
}

// ===== Stack =====
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }
}
export { Queue, Stack };
