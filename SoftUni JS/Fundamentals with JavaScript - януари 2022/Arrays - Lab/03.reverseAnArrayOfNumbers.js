function reverseAnArrayOfNumbers(n, arg1) {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(arg1[i - 1]);
    }
    console.log(arr.join(' '));

}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);