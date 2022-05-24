function condenseArrayToNumber(arr) {
    let sumArr = [];

    while (arr.length > 1) {
        sumArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            sumArr.push(arr[i] + arr[i + 1]);

        }
        arr = sumArr;
    }
    if (arr.length === 1) {
        console.log(Number(arr));
    } else {

        console.log(Number(sumArr));
    }
}
condenseArrayToNumber([1]);