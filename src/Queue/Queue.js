//@ts-check
// First In First Out
class Queue {
  constructor() {
    this.queue = [];
    this.length = this.queue.length;
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.queue.length === 0) {
      return;
    }
    this.queue.shift();
  }

  size() {
    return this.length;
  }

  clear() {
    this.queue = [];
  }

  getQueue() {
    return this.queue;
  }
}

export default Queue