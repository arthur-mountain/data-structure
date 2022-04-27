//@ts-check
// First In First Out
class Queue {
  #queue;
  #length;

  constructor() {
    this.#queue = [];
    this.#length = 0;
  }

  enqueue(item) {
    this.#queue.push(item);
    this.#length++;
    return this;
  }

  dequeue() {
    if (this.#length === 0) {
      return null;
    }

    this.#length--;
    this.#queue.shift();
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

export default Queue;