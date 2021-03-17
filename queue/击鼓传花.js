//规则: 一群人,按照顺序报数,当喊道4的人就淘汰,看最后的获胜者
let Queue=require('./queue');
let peopleList=new Queue();
peopleList.enqueue('火小邪');
peopleList.enqueue('郑则道');
peopleList.enqueue('水妖儿');
peopleList.enqueue('乔大脑袋');
peopleList.enqueue('乔二爪子');
peopleList.enqueue('潘子');
let number=10;
while(peopleList.size()>1){
    for(let i=0;i<number;i++){
       if (i<number-1) {
       let people= peopleList.dequeue();
        peopleList.enqueue(people);
       }else{
        peopleList.dequeue();
       }
    }
    console.log("peopleList==>",peopleList);
    
}
let winer=peopleList.front();
console.log("胜利者为:",winer);

