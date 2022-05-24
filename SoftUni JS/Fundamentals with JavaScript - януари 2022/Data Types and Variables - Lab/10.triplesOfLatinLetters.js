function triplesOfLatinLetters(stringOfNumber) {
    let num = Number(stringOfNumber);

    for (let a = 0; a < num; a++) {
        let letter1 = String.fromCharCode(97 + a);
        for (let b = 0; b < num; b++) {
            let letter2 = String.fromCharCode(97 + b);
            for (let c = 0; c < num; c++) {
                let letter3 = String.fromCharCode(97 + c);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
triplesOfLatinLetters('3')