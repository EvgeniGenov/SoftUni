function oddAndEvenSum(num) {

    let stringOfNumber = num + "";
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < stringOfNumber.length; i++) {
        if (Number(stringOfNumber[i]) % 2 === 0) {
            evenSum += Number(stringOfNumber[i]);
        } else {
            oddSum += Number(stringOfNumber[i]);
        }

    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);