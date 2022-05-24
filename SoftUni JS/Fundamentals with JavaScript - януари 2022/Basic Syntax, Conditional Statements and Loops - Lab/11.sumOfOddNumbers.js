function sumOfOddNumbers(num) {
    let oddNum = 1;
    let sum = 0;

    for (let i = 0; i < num; i++) {

        if (oddNum % 2 !== 0) {
            console.log(oddNum);
            sum += oddNum;
        }
        oddNum += 2;

    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5)