//@ts-check
class PriorityNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  #queue;
  #length;

  constructor() {
    this.#queue = [];
    this.#length = 0;
  }

  enqueue({ value, priority = Infinity }) {
    if (priority < 0) return null;

    const queue = this.#queue;
    const newNode = new PriorityNode(value, priority);

    if (!this.#length) {
      queue.push(newNode);
      this.#length++;
      return;
    }

    // 優先級數字越小，優先度越高
    for (let i = 0; i <= this.#length - 1; i++) {
      if (newNode.priority < queue[i].priority) {
        queue.splice(i, 0, newNode);
        this.#length++;
        return
      }
    }

    queue.push(newNode);
    this.#length++;
  }

  dequeue() {
    if (!this.#length) return null;

    this.#length--;
    return this.#queue.shift();
  }

  size() {
    return this.#length;
  }

  clear() {
    this.#queue.length = this.#length = 0;
    return true;
  }

  printAll() {
    let queueIndex = 0;
    while (queueIndex < this.#length) {
      console.log("🚀 ~ file: Queue.js ~ line 38 ~ Queue ~ printAll ~ this.#queue[queueIndex]", this.#queue[queueIndex])
      queueIndex++;
    }
  }
}

export default PriorityQueue;