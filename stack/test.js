let Stack=require('./stack');
let stack=new Stack();  
stack.push("火小邪");
stack.push("潘子");
stack.push("水妖儿");
stack.pop();
console.log(stack);
let first=stack.peek();
console.log("栈底元素=>",first);