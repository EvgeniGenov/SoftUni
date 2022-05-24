function lastKNumbersSequance(n, k) {
    let arr = [];
    arr.push(1);

    for (let i = 0; i < n - 1; i++) {
        let sumOfPrev = 0;

        for (let j = i; j > i - k; j--) {
            if (j < 0) {
                break;
            }
            sumOfPrev += Number(arr[j]);
        }
        arr.push(sumOfPrev);

    }

    console.log(arr.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);