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

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    };

    // get tail
    current.next = node;
    this.length++;
  }

  insertTo(value, index, position = LinkList.behind) {
    if (typeof index === 'undefined' || Math.abs(index) > this.length) return null;

    let newIndex = index;
    if (index < 0) {
      newIndex = this.length + index;
    }

    const node = new ListNode(value);

    let current = this.head;
    let prev = null;
    let idx = 0;

    if (newIndex === 0) {
      if (position === LinkList.behind) {
        const nextItem = this.head.next;
        this.head.next = node;
        node.next = nextItem;
      } else {
        const prevHead = this.head;
        this.head = node;
        this.head.next = prevHead;
      }

      this.length++;
      return;
    }

    while (idx < newIndex) {
      prev = current;
      current = current.next;
      idx++;
    }

    if (position === LinkList.behind) {
      const nextItem = current.next;
      current.next = node;
      node.next = nextItem;
    } else {
      prev.next = node;
      node.next = current;
    }

    this.length++;
  }

  update(value, index) {
    if (typeof index === 'undefined' || Math.abs(index) > this.length) return null;

    let newIndex = index;
    if (index < 0) {
      newIndex = this.length + index;
    }

    let current = this.head;
    let idx = 0;
    while (idx < newIndex) {
      current = current.next;
      idx++;
    }

    current.value = value;
  }

  removeAt(index) {
    if (typeof index === 'undefined' || Math.abs(index) > this.length) return null;

    let newIndex = index;
    if (index < 0) {
      newIndex = this.length + index;
    }

    let current = this.head;
    let prev = null;
    let idx = 0;

    if (newIndex === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    while (idx < newIndex) {
      prev = current;
      current = current.next;
      idx++;
    };

    prev.next = current.next;
    current = null;
    this.length--;
  }

  log() {
    let current = this.head;
    while (current) {
      console.log('🚀 ~ linkList ~ current value: %c%s', 'color:lightblue;', current.value);

      current = current.next;
    }
    console.log('🚀 ~ linkList ~ current length is: %c%d', 'color:lightblue;', this.length);
  }
}

export default LinkList;