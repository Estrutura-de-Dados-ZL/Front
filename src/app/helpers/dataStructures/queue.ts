import { No } from "./no"

export class Queue<T> {
    front: No<T> | null;
    rear: No<T> | null;

    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data: T): void {
        const newNo = new No(data);

        if (!this.front) {
            this.front = newNo;
            this.rear = newNo;
        } else {
            if (this.rear) {
                this.rear.next = newNo;
                this.rear = newNo;
            }
        }
    }

    dequeue(): T | null {
        if (!this.front) {
            return null;
        }

        const dequeuedData = this.front.data;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        return dequeuedData;
    }

    peek(): T | null {
        return this.front ? this.front.data : null;
    }

    isEmpty(): boolean {
        return this.front === null;
    }
}