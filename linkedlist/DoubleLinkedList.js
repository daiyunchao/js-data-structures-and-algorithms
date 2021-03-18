let LinkedList = require('./linkedList');

class DoubleNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}


module.exports = class DoubleLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(data) {
        let node = new DoubleNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    insert(position, data) {
        let node = new DoubleNode(data);
        if ((position >= this.length) || position < 0) {
            return false;
        } else {
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else if (position === 0) {
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            } else if (position === this.length - 1) {
                node.previous = this.tail;
                this.tail.next = node;
                this.tail = node;
            } else {
                let index = 0;
                let previous = null;
                let current = this.head;
                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                node.previous = previous;
                node.next = current;
                previous.next = node;
                current.previous = node;
            }
            this.length += 1;
            return true;
        }
    }

    getData(position) {
        return super.getData(position)
    }

    indexOf(data) {
        return super.indexOf(data)
    }

    removeAt(position){
        if (position < 0 || position >= this.length) {
            return null;
        }
        console.log("this.length==>",this.length);
        let rmItem = null;
        if (position===0){
            rmItem=this.head;
            if (this.length===1){
                this.head=null;
                this.tail=null;
            }else{
                this.head.next.previos=null;
                this.head=this.head.next;
            }
        }else if (position===this.length-1){
            rmItem=this.tail;
            this.tail.previous.next=null;
            this.tail=this.tail.previous;
        }else{
            let index = 0;
            let previous = null;
            let current = this.head;
            while (index < position) {
                index++;
                previous = current;
                current = current.next;
            }
            previous.next=current.next;
            current.next.previous=previous;
            rmItem=this.tail;
        }
        this.length--;
        return rmItem.data;
    }
    update(position, data){
        if (position < 0 || position >= this.length) {
            return false;
        }
        if (this.removeAt(position)) {
            return this.insert(position, data);
        }
        return false;
    }
    remove(data){
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
