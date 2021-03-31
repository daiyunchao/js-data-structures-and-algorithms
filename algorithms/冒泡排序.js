let arr = [4, 5, 6, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    let isSwap=false;
    for (let j = 0; j < arr.length-i; j++) {
        if (arr[j] > arr[j+1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            isSwap=true;
        }
    }
    console.log("arr11==>", arr);
    if (!isSwap) {
        break;
    }
}
console.log("arr==>", arr);

