let Stack = require('./stack');
function dec2Unit(dec, unit) {
    let sourceDec = dec;
    let stack = new Stack();
    while (dec > 0) {
        let remainder = dec % unit;
        remainder=getCode(remainder);
        stack.push(remainder);
        dec = Math.floor(dec / unit);
    }
    let ret = "";
    let len = stack.size();
    for (let i = 0; i < len; i++) {
        ret += stack.pop();
    }
    console.log(`10进制为:${sourceDec},${unit}进制为:${ret}`);
}

function getCode(num) {
    if (num < 10) return num;
    let code = "";
    switch (num) {
        case 10:
            code = "a";
            break;
        case 11:
            code = "a";
            break;
        case 11:
            code = "b";
            break;
        case 12:
            code = "c";
            break;
        case 13:
            code = "d";
            break;
        case 14:
            code = "e";
            break;
        case 15:
            code = "f";
            break;
        default:
            break;
    }
    return code;
}
dec2Unit(100, 8);
dec2Unit(88, 2);
dec2Unit(77, 16);