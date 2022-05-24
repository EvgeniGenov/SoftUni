function numberModification(num) {
    let numAsString = num + "";
    let numberAsArr = numAsString.split("");

    for (let i = 0; i < 6; i++) {
        let sum = 0;

        for (let j = 0; j < numberAsArr.length; j++) {
            sum += Number(numberAsArr[j]);
        }
        if (sum / numberAsArr.length <= 5) {
            numberAsArr.push(9);
        } else {
            break;
        }
    }
    console.log(`${numberAsArr.join('')}`);
}
numberModification(101);
numberModification(5835);