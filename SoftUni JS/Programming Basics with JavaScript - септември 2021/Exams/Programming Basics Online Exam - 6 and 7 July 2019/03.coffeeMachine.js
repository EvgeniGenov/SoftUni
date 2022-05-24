function coffeeMachine(input) {
    //текст с възможности "Espresso", "Cappuccino" или "Tea"

    let drink = input[0];
    let sugar = input[1];
    //текст с възможности "Without", "Normal" или "Extra"
    let number = Number(input[2]);
    let price = 0;

    switch (drink) {

        case 'Espresso':
            if (sugar === 'Without') {
                price = 0.90 * 0.65;
            } else if (sugar === 'Normal') {
                price = 1;
            } else if (sugar === 'Extra') {
                price = 1.20;
            }
            if (number >= 5) {
                price = price * 0.75;
            }
            break;

        case 'Cappuccino':
            if (sugar === 'Without') {
                price = 1 * 0.65;
            } else if (sugar === 'Normal') {
                price = 1.20;
            } else if (sugar === 'Extra') {
                price = 1.60;
            }

            break;

        case 'Tea':
            if (sugar === 'Without') {
                price = 0.50 * 0.65;
            } else if (sugar === 'Normal') {
                price = 0.60;
            } else if (sugar === 'Extra') {
                price = 0.70;
            }

            break;

    }
    let totalSum = price * number;

    if (totalSum > 15) {

        totalSum = totalSum * 0.80;
    }

    console.log(`You bought ${number} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino",
    "Normal",
    "13"
])