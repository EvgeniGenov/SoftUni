function firstAndLastKNumbers(arr) {
    let kNumber = Number(arr.shift());
    let arr1 = arr.slice(0, kNumber);
    let arr2 = arr.slice(arr.length - kNumber, arr.length);

    console.log(arr1.join(' '));
    console.log(arr2.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);