// First In Last Out
class Stack {
  constructor() {
    this.stack = [];
    this.length = this.stack.length;
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  clear() {
    this.stack = [];
  }

  size() {
    return this.length;
  }
}

export default Stack