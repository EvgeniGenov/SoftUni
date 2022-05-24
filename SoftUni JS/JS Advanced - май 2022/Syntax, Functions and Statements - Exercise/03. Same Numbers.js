function sameNumbers(num) {
    let input = String(num);
    let sum = 0;

    let isSame = true;
    let firstDigit = input[0];


    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) != firstDigit) {
            isSame = false;
        }
        sum += Number(input[i]);
    }

    console.log(isSame);
    console.log(sum);

}

sameNumbers(2222222);