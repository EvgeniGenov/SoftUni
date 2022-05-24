function bitcoinMining(input) {

    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let totalMoney = 0;
    let day = 1;
    let bitcoin = 0;
    let bitcoinDay = 0;
    let bitcoinToday = 0;
    let bitcoinDays = 1;
    let firstBitcoinDay = Number.MAX_SAFE_INTEGER;


    for (let index = 0; index < input.length; index++) {

        if (day % 3 === 0) {
            input[index] *= 0.70;
        }
        totalMoney += input[index] * goldPrice;

        if (totalMoney >= bitcoinPrice) {
            bitcoinDays++;
            bitcoin += Math.floor(totalMoney / bitcoinPrice);
            bitcoinToday = Math.floor(totalMoney / bitcoinPrice);;

            if (day < firstBitcoinDay) {
                firstBitcoinDay = day;
            }
            totalMoney -= bitcoinPrice * bitcoinToday;
        }
        day++;
        bitcoinToday = 0;
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
bitcoinMining([50, 100]);