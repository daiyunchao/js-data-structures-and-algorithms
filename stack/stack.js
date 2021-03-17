module.exports = class Stack{
    constructor(){
        this.items=[];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        if (this.items.length===0) {
            return null;
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
};