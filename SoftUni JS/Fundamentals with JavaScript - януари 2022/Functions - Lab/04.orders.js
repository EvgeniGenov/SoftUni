function orders(product, quantity) {

    let price = 0;
    let coffeePriceOrder = () => quantity * 1.50;
    let waterPriceOrder = () => quantity * 1.00;

    switch (product) {

        case 'coffee':
            price = coffeePriceOrder();
            break;
        case 'water':
            price = waterPriceOrder();
            break;
        case 'coke':
            price = quantity * 1.40;
            break;
        case 'snacks':
            price = quantity * 2;
            break;
    }
    console.log(price.toFixed(2));
}
orders("water",
    5);