function specialNumbers(n) {
    for (let num = 1; num <= n; num++) {
        let numToString = String(num);
        let sum = 0;

        for (let j = 0; j < numToString.length; j++) {

            sum += Number(numToString[j]);
        }

        let special = false;

        if (sum === 5 || sum === 7 || sum === 11) {

            special = true;
        }

        if (special) {

            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);

        }
    }
}
specialNumbers(15);