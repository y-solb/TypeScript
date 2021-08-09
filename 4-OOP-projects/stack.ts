{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      const node: StackNode = { value, next: this.head };
      this._size++;
      this.head = node;
    }
    pop(): string {
      // null == undefined
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const popNode = this.head;
      this.head = popNode.next;
      this._size--;
      return popNode.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('one');
  stack.push('two');
  stack.push('three');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
