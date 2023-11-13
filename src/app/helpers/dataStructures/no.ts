export class No<T> {
	constructor(public data: T, public next: No<T> | undefined = undefined) {}
}
