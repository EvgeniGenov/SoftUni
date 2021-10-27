function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];
    let price = 0;

    //"spring", "summer", "autumn" или "winter"

    switch (season) {

        case 'spring':

            if (people <= 5) {
                price = 50;
            } else {
                price = 48;
            }
            break;

        case 'summer':
            if (people <= 5) {
                price = 48.50;
            } else {
                price = 45;
            }
            price = price * 0.85;
            break;

        case 'autumn':
            if (people <= 5) {
                price = 60;
            } else {
                price = 49.50;
            }
            break;

        case 'winter':
            if (people <= 5) {
                price = 86;
            } else {
                price = 85;
            }
            price = price * 1.08;

            break;

    }
    let totalPrice = people * price;

    console.log(`${totalPrice.toFixed(2)} leva.`);

}
excursionCalculator(['5',
    'spring'
])