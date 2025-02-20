export default class Node {
	constructor({ value = null, nextNode = null }) {
		this.value = value;
		this._nextNode = nextNode;
	}

	get data() {
		return this.value;
	}

	set data(value) {
		this.value = value;
	}

	get nextNode() {
		return this._nextNode;
	}

	set nextNode(nextNode) {
		if (nextNode instanceof Node || nextNode === null) {
			this._nextNode = nextNode;
		} else {
			throw new Error("nextNode must be an instance of Node or null");
		}
	}
}
