// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
        return arr;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        } else {
            let leadingNode = this.traverseToIndex(index - 1);

            const newNode = new Node(value);
            newNode.next = leadingNode.next;
            leadingNode.next = newNode;
            this.length++;
            return this;
        }
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else if (index >= this.length) {
            let prevNode = this.traverseToIndex(this.length - 2);
            prevNode.next = null;
            this.length--;
        } else {
            let prevNode = this.traverseToIndex(index - 1);
            let connectingNode = prevNode.next.next;
            prevNode.next = connectingNode;
            this.length--;
        }
    }

    reverse() {
        if (!this.head.next) {
            return this;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        

        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(50);
myLinkedList.prepend(115);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
myLinkedList.printList();

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            prev: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
        return arr;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        } else {
            let leadingNode = this.traverseToIndex(index - 1);
            const nextNode = leadingNode.next;
            const newNode = new Node(value);
            leadingNode.next = newNode;
            newNode.next = nextNode;
            newNode.prev = leadingNode;
            nextNode.prev = newNode;
            this.length++;
            return this;
        }
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index >= this.length) {
            let prevNode = this.traverseToIndex(this.length - 2);
            prevNode.next = null;
        } else {
            let prevNode = this.traverseToIndex(index - 1);
            let connectingNode = prevNode.next.next;
            prevNode.next = connectingNode;
            connectingNode.prev = prevNode;
        }
        this.length--;
    }
}