function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let barcode = '';
    let startString = start + '';
    let endString = end + '';

    for (let a = startString[0]; a <= endString[0]; a++) {
        for (let b = startString[1]; b <= endString[1]; b++) {
            for (let c = startString[2]; c <= endString[2]; c++) {
                for (let d = startString[3]; d <= endString[3]; d++) {

                    if (a % 2 === 1 && b % 2 === 1 && c % 2 === 1 && d % 2 === 1) {

                        barcode += `${a}${b}${c}${d} `;
                    }



                }
            }
        }

    }

    console.log(barcode);
}
barcodeGenerator(["3256",
    "6579"
])