function sumDigits(num) {
    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }
    console.log(`${sum}`);

}
sumDigits(97561);