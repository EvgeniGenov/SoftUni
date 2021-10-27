function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;
    // "Spring", "Summer", "Autumn", "Winter"

    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }
    if (fishermen <= 6) {
        price = price * 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        price = price * 0.85;
    } else {
        price = price * 0.75;
    }


    if (fishermen % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95;
    }

    let diff = Math.abs(budget - price).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${diff} leva left.`);

    } else {
        console.log(`Not enough money! You need ${diff} leva.`);

    }
}
fishingBoat(["3600",
    "Autumn",
    "6"
])