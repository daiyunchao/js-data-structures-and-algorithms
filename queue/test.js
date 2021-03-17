let Queue=require('./queue');
let queue=new Queue();
queue.enqueue("zhang");
queue.enqueue("lisi");
queue.enqueue("wang");
queue.enqueue("zhao");
queue.dequeue();
console.log(queue);
