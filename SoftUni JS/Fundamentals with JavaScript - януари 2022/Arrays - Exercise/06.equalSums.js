function equalSums(arr) {

    let isEqualSums = true;

    for (let i = 0; i < arr.length; i++) {
        let sum1 = 0;
        let sum2 = 0;
        for (let j = 0; j <= i - 1; j++) {
            sum1 += arr[j];
        }
        for (let x = i + 1; x < arr.length; x++) {
            sum2 += arr[x];
        }

        if (sum1 === sum2) {
            console.log(i);
            isEqualSums = false;
        }
    }
    if (isEqualSums) {
        console.log('no');
    }
}
equalSums([1, 2, 3]);