class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    insert(position, data) {
        let node = new Node(data);
        if ((position >= this.length) || position < 0) {
            return false;
        } else {
            if (position === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                let index = 0;
                let previous = this.head;
                let current = this.head;
                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            this.length += 1;
            return true;
        }
    }

    getData(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }
        let current = this.head;
        let index = 0;
        while (index < position) {
            index++;
            current = current.next;
        }
        return current.data;
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current && current.data != data) {
            index++;
            current = current.next;
        }
        if (current && current.data == data) {
            return index;
        }
        return -1;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return false;
        }
        let rmItem = null;
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let index = 0;
            let previous = this.head;
            let current = this.head;
            while (index < position) {
                index++;
                previous = current;
                current = current.next;
                rmItem = current;
            }
            previous.next = current.next;
        }
        this.length--;
        return rmItem;
    }

    update(position, data) {
        if (position < 0 || position >= this.length) {
            return false;
        }
        if (this.removeAt(position)) {
            return this.insert(position, data);
        }
        return false;
    }

    remove(data) {
        let position = this.indexOf(data);
        if (position > -1) {
            return this.removeAt(position);
        }
        return null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}