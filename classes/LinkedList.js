import Node from "./Node.js";

export default class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	append(value) {
		let newNode = new Node({ value });

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	prepend(value) {
		let newNode = new Node({ value });

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.nextNode = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	size() {
		return this.length;
	}

	atIndex(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		let current = this.head;
		let count = 0;
		while (count < index) {
			current = current.nextNode;
			count++;
		}
		return current;
	}

	pop() {
		if (this.head === null) {
			return null;
		}

		let current = this.head;
		let previous = null;

		while (current.nextNode) {
			previous = current;
			current = current.nextNode;
		}

		if (previous) {
			previous.nextNode = null;
			this.tail = previous;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return current;
	}

	contains(value) {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}
		return false;
	}

	find(value) {
		let current = this.head;
		let index = 0;

		while (current) {
			if (current.value === value) {
				return index;
			}
			current = current.nextNode;
			index++;
		}
		return null;
	}

	toString() {
		let current = this.head;
		let result = "";
		while (current) {
			result += `(${current.value}) -> `;
			current = current.nextNode;
		}
		result += "null";
		return result;
	}

	insertAt(value, index) {
		if (index < 0 || index > this.length) {
			return false;
		}

		let newNode = new Node({ value });

		if (index === 0) {
			newNode.nextNode = this.head;
			this.head = newNode;
			if (this.length === 0) {
				this.tail = newNode;
			}
		} else if (index === this.length) {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		} else {
			let current = this.head;
			for (let i = 0; i < index - 1; i++) {
				current = current.nextNode;
			}
			newNode.nextNode = current.nextNode;
			current.nextNode = newNode;
		}
		this.length++;
		return true;
	}

	removeAt(index) {
		if (index < 0 || index >= this.length) {
			return false;
		}

		let current = this.head;

		if (index === 0) {
			this.head = current.nextNode;
			if (this.length === 1) {
				this.tail = null;
			}
		} else {
			let previous = null;
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.nextNode;
			}
			previous.nextNode = current.nextNode;
			if (index === this.length - 1) {
				// If removing last element
				this.tail = previous;
			}
		}
		this.length--;
		return true;
	}
}
