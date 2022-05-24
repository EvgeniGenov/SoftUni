function nonDecreasingSubset(arr) {
    let result = [];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i === 0) {

            result.push(arr[i]);
            max = arr[i];
        }

        for (let j = i + 1; j < i + 2; j++) {

            if (arr[j] >= max) {

                result.push(arr[j]);
                max = arr[j];
            }
        }
    }
    console.log((result.join(' ')));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);