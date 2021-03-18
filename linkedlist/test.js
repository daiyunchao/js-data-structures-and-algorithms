let LinkedList=require('./linkedList');
let linkedList=new LinkedList();
linkedList.append("火小邪");
linkedList.append("潘子");
linkedList.insert(0,"水妖儿");
linkedList.insert(3,"郑则道");
console.log(JSON.stringify(linkedList));
let data0=linkedList.getData(0);
console.log("headData===>",data0)
let data2=linkedList.getData(2);
console.log("headData===>",data2)
let index=linkedList.indexOf("火小邪");
console.log("indexOf==>",index)
index=linkedList.indexOf("郑则道");
console.log("indexOf==>",index)
index=linkedList.indexOf("张三丰");
console.log("indexOf==>",index)
// linkedList.removeAt(3);
console.log(JSON.stringify(linkedList));
linkedList.update(3,"水魅儿");
console.log(JSON.stringify(linkedList));
linkedList.remove('水魅儿');
console.log(JSON.stringify(linkedList));
