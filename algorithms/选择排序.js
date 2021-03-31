let arr = [4, 5, 6, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    let minIndex = -1;
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j];
            minIndex = j;
        }
    }
    if (minIndex===-1) {
        continue;
    }
    arr.splice(i, 0, min);
    arr.splice(minIndex+1, 1);
    console.log("arr==>", arr,i,minIndex,min);
}
