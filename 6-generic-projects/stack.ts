{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      const node = { value, next: this.head };
      this._size++;
      this.head = node;
    }
    pop(): T {
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

  const stack = new StackImpl<string>(10);
  stack.push('one');
  stack.push('two');
  stack.push('three');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(111);
  stack2.push(222);
  stack2.push(333);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
