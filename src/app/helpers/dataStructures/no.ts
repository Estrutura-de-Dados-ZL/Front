export class No<T> {
    data: T;
    next: No<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}