//@ts-check
class ListNode {
  constructor(value) {
    this.value = value ?? value;
    this.next = null;
    this.prev = null;
  }
}

class LinkList {
  #head;
  #tail;
  #length;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  searchFromHead(index) {
    if (index < 0 || index >= this.#length) return null;

    let target = this.#head;
    let idx = 0;
    while (idx < index) {
      target = target.next;
      idx++;
    }
    return target;
  }
  searchFromTail(index) {
    if (index < 0 || index >= this.#length) return null;

    let target = this.#tail;
    let idx = 0;
    while (idx < index) {
      target = target.prev;
      idx++;
    }
    return target;
  }
  append(value) {
    const node = new ListNode(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
      this.#length++;
      return;
    }

    node.prev = this.#tail;
    this.#tail.next = node;
    this.#tail = node;
    this.#length++;
  }
  prepend(value) {
    const node = new ListNode(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
      this.#length++;
      return;
    }

    this.#head.prev = node;
    node.next = this.#head;
    this.#head = node;
    this.#length++;
  }

  insertAfter(value, index, from = 'start') {
    let targetNode;
    if (from === 'start') {
      targetNode = this.searchFromHead(index);
    }
    if (from === 'end') {
      targetNode = this.searchFromTail(index);
    }

    if (!targetNode) return null;

    const node = new ListNode(value);

    if (index === this.#length - 1) {
      this.#tail.next = node;
      node.prev = this.#tail;
      this.#length++;
      return;
    }

    const next = targetNode.next;
    targetNode.next = node;
    next.prev = node;
    node.next = next;
    node.prev = targetNode;
    this.#length++;
  }

  insertBefore(value, index, from = 'start') {
    let targetNode;
    if (from === 'start') {
      targetNode = this.searchFromHead(index);
    }
    if (from === 'end') {
      targetNode = this.searchFromTail(index);
    }

    if (!targetNode) return null;

    const node = new ListNode(value);

    if (index === 0) {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
      this.#length++;
      return;
    }

    const prev = targetNode.prev;
    prev.next = node;
    node.prev = prev;
    node.next = targetNode;
    targetNode.prev = node;
    this.#length++;
  }
  removeFromHead(index) {
    if (index === 0) {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#length--;
      return;
    }

    if (index === this.#length - 1) {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      this.#length--;
      return;
    }

    const targetNode = this.searchFromHead(index);
    if (targetNode) {
      const prev = targetNode.prev;
      const next = targetNode.next;
      prev.next = next;
      next.prev = prev;
      this.#length--;
    }
  }
  removeFromTail(index) {
    if (index < 0 || index >= this.#length) return null;

    if (index === 0) {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      this.#length--;
      return;
    }

    if (index === this.#length - 1) {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#length--;
      return;
    }

    const targetNode = this.searchFromTail(index);
    if (targetNode) {
      const prev = targetNode.prev;
      const next = targetNode.next;
      prev.next = next;
      next.prev = prev;
    }
  }

  updateFromHead(value, index) {
    const targetNode = this.searchFromHead(index);

    if (targetNode) targetNode.value = value;
  }

  updateFromTail(value, index) {
    const targetNode = this.searchFromTail(index);

    if (targetNode) targetNode.value = value;
  }

  size() {
    return this.#length;
  }

  print() {
    const tmp = [];
    let current = this.#head;
    while (current) {
      tmp.push(current)
      current = current.next;
    }
    console.log("\n🚀 ~ LinkList ~ print ~ \n", tmp)
  }
}

export default LinkList;