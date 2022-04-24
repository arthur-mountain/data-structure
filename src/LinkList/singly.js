//@ts-check
class ListNode {
  constructor(value) {
    this.value = value ?? value;
    this.next = null;
  }
}

class LinkList {
  static behind = 'behind';
  static front = 'front';
  #head;
  #tail;
  #length;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  append(value) {
    if (typeof value === 'undefined') return null;

    const node = typeof value === 'object' ? value : new ListNode(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }

    this.#length++;
  }

  getNode(index) {
    if (index === 0) return this.#head;
    if (index === this.#length - 1) return this.#tail;

    let current = this.#head;
    let idx = 0;

    while (idx < index) {
      current = current.next;
      idx++;
    }

    return current;
  }

  insertTo(value, index, position = LinkList.behind) {
    if (index < 0 || index >= this.#length) return null;

    const node = new ListNode(value);

    if (index === 0) {
      if (position === LinkList.behind) {
        const nextItem = this.#head.next;
        this.#head.next = node;
        node.next = nextItem;
      } else {
        const prevHead = this.#head;
        this.#head = node;
        this.#head.next = prevHead;
      }

      this.#length++;
      return;
    }

    if (index === this.#length - 1) {
      if (position === LinkList.behind) {
        this.append(node);
      } else {
        const prevNode = this.getNode(index - 1);
        prevNode.next = node;
        node.next = this.#tail;
      }

      this.#length++;
      return;
    }

    const currentNode = this.getNode(index);

    if (position === LinkList.behind) {
      const nextNode = currentNode.next;
      currentNode.next = node;
      node.next = nextNode;
    } else {
      const prevNode = this.getNode(index - 1);
      prevNode.next = node;
      node.next = currentNode;
    }

    this.#length++;
  }

  update(value, index) {
    if (index < 0 || index >= this.#length) return null;

    const currentNode = this.getNode(index);
    currentNode.value = value;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#length) return null;

    if (index === 0) {
      this.#head = this.#head.next;
      this.#length--;
      return;
    }

    if (index === this.#length - 1) {
      const prevNode = this.getNode(index - 1);
      this.#tail = prevNode;
      this.#tail.next = null;
      this.#length--;
      return;
    }

    const nextNode = this.getNode(index + 1);
    const prevNode = this.getNode(index - 1);
    prevNode.next = nextNode;
    this.#length--;
  }

  size() {
    return this.#length;
  }

  printAll() {
    const tmp = [];
    let current = this.#head;
    while (current) {
      tmp.push(current);
      current = current.next;
    }
    return tmp;
  }
}

export default LinkList;