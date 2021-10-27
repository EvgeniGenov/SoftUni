function specialNumbers(input) {
    let n = Number(input[0]);
    let specialNumber = '';


    for (let i = 1111; i <= 9999; i++) {

        let numToString = i + ' ';
        let counter = 0;

        for (let j = 0; j < numToString.length; j++) {

            let currentDigit = Number(numToString.charAt(j));

            if (n % currentDigit === 0) {
                counter++;
            }

            if (counter === Number(numToString.length)) {
                specialNumber += `${i} `;
                break;

            }


        }

    }
    console.log(specialNumber);

}
specialNumbers(["11"])