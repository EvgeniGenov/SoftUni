function maidenParty(input) {
    let budget = Number(input[0]);
    let loveLetter = Number(input[1]);
    let priceLoveLetter = 0.60;
    let rosses = Number(input[2]);
    let priceRosses = 7.20;
    let keysholders = Number(input[3]);
    let priceKeysholders = 3.60;
    let caricature = Number(input[4]);
    let priceCaricature = 18.20;
    let luckySurprise = Number(input[5]);
    let priceLuckySurprise = 22;

    let sumArticles = loveLetter + rosses + keysholders + caricature + luckySurprise;
    let totalPrice = loveLetter * priceLoveLetter + rosses * priceRosses + keysholders * priceKeysholders + caricature * priceCaricature + luckySurprise * priceLuckySurprise;

    if (sumArticles >= 25) {

        totalPrice = totalPrice * 0.65;
    }

    totalPrice = totalPrice * 0.90;
    let diff = Math.abs(budget - totalPrice);
    if (totalPrice >= budget) {

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }


}
maidenParty(['40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
])