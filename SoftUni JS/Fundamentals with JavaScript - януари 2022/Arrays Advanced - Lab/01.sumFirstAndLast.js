function sumFirstAndLast(arr) {

    let num1 = Number(arr.shift());
    let num2 = Number(arr.pop());
    let result = num1 + num2;
    console.log(result);

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);