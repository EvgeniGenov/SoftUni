function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decoration = budget * 0.10;

    let totalClothingPrice = 0;

    if (extrasCount >= 150) {
        totalClothingPrice = extrasCount * (clothingPrice * 0.90);
    } else {

        totalClothingPrice = extrasCount * clothingPrice;
    }

    let totalPrice = decoration + totalClothingPrice;
    let diff = Math.abs(totalPrice - budget);
    if (totalPrice > budget) {

        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);


    } else {

        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000",
    "120",
    "55.5"
])