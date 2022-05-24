function storeProvision(availableStock, deliveredStock) {

    let storedProducts = {};


    for (let i = 0; i < availableStock.length; i += 2) {
        let currentProduct = availableStock[i];
        storedProducts[currentProduct] = Number(availableStock[i + 1]);

    }

    for (let i = 0; i < deliveredStock.length; i += 2) {
        let currentProduct = deliveredStock[i];

        if (storedProducts[currentProduct] === undefined) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(deliveredStock[i + 1]);

    }

    for (let key of Object.keys(storedProducts)) {

        console.log(`${key} -> ${storedProducts[key]}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);