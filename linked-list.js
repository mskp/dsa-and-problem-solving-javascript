export class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;

		class Node {
			constructor(value, next=null) {
				this.data = value;
				this.next = next;
			}
		}
		this.Node = Node;
	}

	insertAtBegin(value) {
		this.size++;
		const newNode = new this.Node(value);
		if (this.head == null) {
			return this.head = newNode;
		}
		const temp = this.head;
		this.head = newNode;
		newNode.next = temp;
	}

	insertAtEnd(value) {
		if (this.head == null) {
			return this.insertAtBegin(value);
		}
		this.size++;
		const newNode = new this.Node(value);
		let temp = this.head;
		while (temp.next != null) {
			temp = temp.next;
		}
		return temp.next = newNode;
	}

	insertAtPos(value, position) {
		if (this.head === null || position === 1) {
			console.log("Inserting at beginning")
			return this.insertAtBegin(value);
		}
		if (position <= 0 || position > this.size) {
			console.log("Invalid Position");
			return "Invalid Position";
		}
		if (position === this.size) {
			console.log("Inserting in last")
			return this.insertAtEnd(value);
		}

		this.size ++;
		let temp = this.head;
		for (let i = 1; i < position - 1; i++) {
			temp = temp.next;
		}
		
		const newNode = new this.Node(value, temp.next);
		return temp.next = newNode;
	}

	isEmpty() {
		return this.size === 0 || this.head == null;
	}

	toString() {
		if (this.head == null) {
			return 'Linked List is empty';
		}
		let res = '';
		for (let temp = this.head; temp != null; temp = temp.next) {
			res += temp.data;
			if(temp.next != null)
				res += '->'
		}
		return res;
	}
}

// const list = new LinkedList();
// list.insertAtBegin(45);
// list.insertAtBegin(65);
// list.insertAtBegin(70);
// list.insertAtBegin(55);
// list.insertAtBegin(79);
// list.insertAtEnd(66622)
// list.insertAtEnd(42000)
// list.insertAtPos(2222222222, 1)
// console.log(list.toString())
// console.log(`Linked List Size is ${list.size}`)
