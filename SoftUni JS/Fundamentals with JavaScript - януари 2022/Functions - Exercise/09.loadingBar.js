function loadingBar(num) {

    let numDec = num / 10;
    let printPercentage = "";

    if (num < 100) {

        for (let i = 1; i <= numDec; i++) {
            printPercentage += "%";

        }
        for (let j = 1; j <= 10 - numDec; j++) {
            printPercentage += ".";

        }
        console.log(`${num}% [${printPercentage}]`);
        console.log('Still loading...');
    } else if (num === 100) {
        console.log('100% Complete!');
    }


}
loadingBar(30);
loadingBar(50);
loadingBar(100);