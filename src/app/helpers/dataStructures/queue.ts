import {No} from './no';

export class Queue<T> {
	front: No<T> | undefined;
	rear: No<T> | undefined;

	constructor() {
		this.front = undefined;
		this.rear = undefined;
	}

	enqueue(data: T): void {
		const newNo = new No(data);

		if (!this.front) {
			this.front = newNo;
			this.rear = newNo;
		} else if (this.rear) {
			this.rear.next = newNo;
			this.rear = newNo;
		}
	}

	dequeue(): T | undefined {
		if (!this.front) {
			return undefined;
		}

		const dequeuedData = this.front.data;
		this.front = this.front.next;

		if (!this.front) {
			this.rear = undefined;
		}

		return dequeuedData;
	}

	peek(): T | undefined {
		return this.front ? this.front.data : undefined;
	}

	isEmpty(): boolean {
		return this.front === undefined;
	}
}
