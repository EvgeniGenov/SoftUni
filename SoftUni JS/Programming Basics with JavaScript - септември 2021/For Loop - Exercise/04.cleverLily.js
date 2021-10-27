function cleverLily(input) {
    let ageLily = Number(input[0]);
    let priceWashmachine = Number(input[1]);
    let singlePriceToy = Number(input[2]);
    let toys = 0;
    let money = 10;
    let saveMoney = 0;


    for (let i = 1; i <= ageLily; i++) {

        if (i % 2 !== 0) {
            toys++;

        } else {
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }
    saveMoney += toys * singlePriceToy;

    let diff = (Math.abs(priceWashmachine - saveMoney)).toFixed(2);

    if (saveMoney >= priceWashmachine) {

        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }
}
cleverLily(["21",
    "1570.98",
    "3"
])