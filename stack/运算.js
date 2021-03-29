const Stack = require('./stack');
//用栈实现 3+8*5-6
let express = "3+50*5-6";
let symbols = ["+", "-", "*", "/"];
let optNumbersStack = new Stack();
let symbolStack = new Stack();
let tmpNumber = "";
for (let i = 0; i < express.length;) {
    const item = express[i];
    if (symbols.indexOf(item) > -1) {
        if (tmpNumber) {
            optNumbersStack.push(tmpNumber);
            tmpNumber = "";
        }
        let itemPos = symbols.indexOf(item);
        let stackPos = symbols.indexOf(symbolStack.peek());
        if (stackPos > 1 && itemPos <= 1) {
            //优先级更低
            let firstOptNumber = optNumbersStack.pop();
            let secondOptNumber = optNumbersStack.pop();
            let firstSymbol = symbolStack.pop();
            let result = eval(Number(secondOptNumber) + firstSymbol + Number(firstOptNumber));
            optNumbersStack.push(result);
            continue;
        } else {
            symbolStack.push(item);
        }
    } else {
        tmpNumber += item;
        if (i+1==express.length) {
            optNumbersStack.push(tmpNumber);
            tmpNumber = "";
        }
    }
    i++;
}
let size = symbolStack.size();
for (let i = 0; i < size; i++) {
    let firstOptNumber = optNumbersStack.pop();
    let secondOptNumber = optNumbersStack.pop();
    let firstSymbol = symbolStack.pop();
    let result = eval(Number(secondOptNumber) + firstSymbol + Number(firstOptNumber));
    optNumbersStack.push(result);
}
let result = optNumbersStack.pop();
console.log("result===>", result);
