function addBags(input) {
    let priceBaggageOver20 = Number(input[0]);
    let kilogramsBaggage = Number(input[1]);
    let daysBeforeFly = Number(input[2]);
    let numberBaggage = Number(input[3]);
    let feeBaggage = 0;

    if (kilogramsBaggage < 10) {
        feeBaggage = priceBaggageOver20 * 0.20;
    } else if (kilogramsBaggage >= 10 && kilogramsBaggage <= 20) {
        feeBaggage = priceBaggageOver20 * 0.50;
    } else {
        feeBaggage = priceBaggageOver20;
    }

    if (daysBeforeFly > 30) {
        feeBaggage *= 1.10;
    } else if (daysBeforeFly >= 7 && daysBeforeFly <= 30) {
        feeBaggage *= 1.15;
    } else {
        feeBaggage *= 1.40;
    }

    console.log(`The total price of bags is: ${(feeBaggage*numberBaggage).toFixed(2)} lv.`);

}
addBags(["25.50",
    "5",
    "36",
    "6"
])