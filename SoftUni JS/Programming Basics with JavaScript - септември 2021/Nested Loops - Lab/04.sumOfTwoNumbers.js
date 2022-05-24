function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let j = start; j <= end; j++) {
        for (let i = start; i <= end; i++) {
            counter++;

            if (j + i === magic) {
                console.log(`Combination N:${counter} (${j} + ${i} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound === false) {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }
}
sumOfTwoNumbers(["1",
    "10",
    "5"
])