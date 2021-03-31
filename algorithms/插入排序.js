let arr = [4, 5, 6, 3, 2, 1];
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j<i; j++) {
        if (arr[j]>arr[i]) {
            arr.splice(j,0,arr[i]);
            arr.splice(i+1,1);
        }
    }
    console.log("arr==>",arr);
}

