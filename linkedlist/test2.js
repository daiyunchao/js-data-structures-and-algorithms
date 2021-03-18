let DoubleLinkedList = require('./DoubleLinkedList');
let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append("火小邪");
doubleLinkedList.append("潘子");
console.log(doubleLinkedList);
doubleLinkedList.insert(0, "水妖儿");
console.log("测试插入头部:", doubleLinkedList);

doubleLinkedList.insert(2, "水魅儿");
console.log("测试插入尾部:", doubleLinkedList);

doubleLinkedList.insert(1, "乔大脑袋");
console.log("测试插入中间:", doubleLinkedList);

let d0=doubleLinkedList.removeAt(0);
console.log("删除第一个:", d0);
let d3=doubleLinkedList.removeAt(3);
console.log("删除最后一个:", d3);
let d1=doubleLinkedList.removeAt(1);
console.log("删除中间:", d1);