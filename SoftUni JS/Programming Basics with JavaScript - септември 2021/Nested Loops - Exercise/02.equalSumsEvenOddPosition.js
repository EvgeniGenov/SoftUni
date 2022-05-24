function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";

    for (let i = start; i <= end; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let numToString = i + "";

        for (let j = 0; j <= numToString.length; j++) {
            let currentDigit = Number(numToString.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000",
    "100050"
])