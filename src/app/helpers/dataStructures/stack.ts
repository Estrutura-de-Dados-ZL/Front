import { No } from "./no"

export class Stack<T> {
    top: No<T> | null;

    constructor() {
        this.top = null;
    }

    push(data: T): void {
        const newNo = new No(data);
        newNo.next = this.top;
        this.top = newNo;
    }

    pop(): T | null {
        if (!this.top) {
            return null; // Pilha vazia
        }

        const poppedData = this.top.data;
        this.top = this.top.next;
        return poppedData;
    }

    peek(): T | null {
        return this.top ? this.top.data : null;
    }

    isEmpty(): boolean {
        return this.top === null;
    }
}