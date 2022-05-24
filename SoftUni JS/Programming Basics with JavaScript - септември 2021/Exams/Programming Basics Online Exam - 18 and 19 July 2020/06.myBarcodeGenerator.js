function myBarcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let barcode = '';

    for (let i = start; i <= end; i++) {
        let numToString = i + '';
        let oddSum = 0;

        for (let j = 0; j < numToString.length; j++) {

            let currentDigit = Number(numToString.charAt(j));

            if (currentDigit % 2 !== 0) {
                oddSum++;

            }
            if (oddSum === 4) {
                barcode += `${i} `;
            }
        }

    }
    console.log(barcode);
}
myBarcodeGenerator(["3256",
    "6579"
])