function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let totalPrice = 0;
    let counter = 0;


    while (command !== 'Stop') {
        let price = Number(input[index]);
        index++
        counter++;

        if (counter % 3 === 0) {
            price = price / 2;
        }
        totalPrice += price;
        budget = budget - price;

        if (budget < 0) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`)
            break;

        }

        command = input[index];
        index++;

    }

    if (command === 'Stop') {

        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`)
    }
}
// touristShop(["54",
//     "Thermal underwear",
//     "24",
//     "Sunscreen",
//     "45"
// ])

touristShop(['153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop'
])