function addAndSubtract(arr) {
    let sumOriginalArr = 0;
    let sumModifieldArr = 0;
    let modifieldArr = [];

    for (let i = 0; i < arr.length; i++) {
        sumOriginalArr += Number(arr[i]);
        if (arr[i] % 2 === 0) {
            modifieldArr.push(arr[i] + i);
            sumModifieldArr += Number(arr[i] + i);
        } else {
            modifieldArr.push(arr[i] - i);
            sumModifieldArr += Number(arr[i] - i);
        }

    }
    console.log(modifieldArr);
    console.log(sumOriginalArr);
    console.log(sumModifieldArr);


}
addAndSubtract([5, 15, 23, 56, 35]);