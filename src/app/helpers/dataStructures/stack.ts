import {No} from './no';

export class Stack<T> {
	top: No<T> | undefined;

	constructor() {
		this.top = undefined;
	}

	push(data: T): void {
		const newNo = new No(data);
		newNo.next = this.top;
		this.top = newNo;
	}

	pop(): T | undefined {
		if (!this.top) {
			return undefined;
		}

		const poppedData = this.top.data;
		this.top = this.top.next;
		return poppedData;
	}

	peek(): T | undefined {
		return this.top ? this.top.data : undefined;
	}

	isEmpty(): boolean {
		return this.top === undefined;
	}
}
