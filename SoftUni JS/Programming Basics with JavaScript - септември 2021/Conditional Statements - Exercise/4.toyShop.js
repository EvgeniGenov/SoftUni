function toyShop(input) {
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCounts = Number(input[4]);
    let truck = Number(input[5]);

    let toyCount = puzzleCount + talkingDollCount + teddyBearCount + minionsCounts + truck;
    let toyPrice = puzzleCount * 2.60 + talkingDollCount * 3 + teddyBearCount * 4.10 + minionsCounts * 8.20 + truck * 2;

    if (toyCount >= 50) {
        toyPrice = toyPrice * 0.75;

    }

    toyPrice = toyPrice * 0.90;
    let diff = Math.abs(toyPrice - price)

    if (toyPrice >= price) {

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);

    }

}

toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
])