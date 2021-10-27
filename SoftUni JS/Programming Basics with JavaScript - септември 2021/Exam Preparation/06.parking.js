function parking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalPrice = 0;
    let price = 0;

    for (let i = 1; i <= days; i++) {

        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 !== 0) {
                totalPrice += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                totalPrice += 1.25;
            } else {
                totalPrice += 1;
            }

        }
        console.log(`Day: ${i} - ${totalPrice.toFixed(2)} leva`);
        price += totalPrice;
        totalPrice = 0;

    }

    console.log(`Total: ${price.toFixed(2)} leva`);

}
parking(["5",
    "2"
])