function solve(input) {

    let barcodes = Number(input.shift());
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;


    while (barcodes > 0) {
        barcodes--;
        let text = input.shift();

        let match = pattern.exec(text);

        let result = '';

        if (match != null) {

            let barcode = match[1];
            for (let i = 0; i < barcode.length; i++) {

                if (barcode.charCodeAt(i) >= 48 && barcode.charCodeAt(i) <= 57) {
                    result += barcode[i];
                }
            }
            if (result.length > 0) {
                console.log(`Product group: ${result}`);


            } else {
                console.log('Product group: 00');

            }


        } else {
            console.log('Invalid barcode');
        }

    }



}
// solve(["3",
//     "@#FreshFisH@#",
//     "@###Bbrea0D@###",
//     "@##Che4s6E@##"
// ]);
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);