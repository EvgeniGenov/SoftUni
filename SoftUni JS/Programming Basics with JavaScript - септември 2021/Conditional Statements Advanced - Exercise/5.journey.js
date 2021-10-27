function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let type = 0;
    let spentMoney = 0;

    //"Bulgaria", "Balkans" и "Europe"
    //Camp" и "Hotel"

    switch (season) {

        case 'summer':
            if (budget <= 100) {
                destination = "Bulgaria";
                type = "Camp";
                spentMoney = budget * 0.30;
            } else if (budget <= 1000) {
                destination = "Balkans";
                type = "Camp";
                spentMoney = budget * 0.40;
            } else if (budget > 1000) {
                destination = "Europe";
                type = "Hotel";
                spentMoney = budget * 0.90;
            }
            break;
        case 'winter':
            if (budget <= 100) {
                destination = "Bulgaria";
                type = "Hotel";
                spentMoney = budget * 0.70;
            } else if (budget <= 1000) {
                destination = "Balkans";
                type = "Hotel";
                spentMoney = budget * 0.80;
            } else if (budget > 1000) {
                destination = "Europe";
                type = "Hotel";
                spentMoney = budget * 0.90;
            }
            break;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${spentMoney.toFixed(2)}`);
}
journey(["1500", "summer"])