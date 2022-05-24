function aluminumJoinery(input) {

    let numberJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let typeDelivery = input[2];

    let price = 0;
    let priceDelivery = 0;

    //"90X130" или "100X150" или "130X180" или "200X300";


    switch (typeJoinery) {

        case '90X130':

            price = 110;

            if (numberJoinery > 30 && numberJoinery <= 60) {
                price *= 0.95;
            } else if (numberJoinery > 60) {
                price *= 0.92;
            } else if (numberJoinery < 10) {
                console.log("Invalid order");
                return;
            }

            break;

        case '100X150':

            price = 140;

            if (numberJoinery > 40 && numberJoinery <= 80) {
                price *= 0.94;
            } else if (numberJoinery > 80) {
                price *= 0.90;
            } else if (numberJoinery < 10) {
                console.log("Invalid order");
                return;
            }

            break;

        case '130X180':

            price = 190;

            if (numberJoinery > 20 && numberJoinery <= 50) {
                price *= 0.93;
            } else if (numberJoinery > 50) {
                price *= 0.88;
            } else if (numberJoinery < 10) {
                console.log("Invalid order");
                return;
            }

            break;
        case '200X300':

            price = 250;

            if (numberJoinery > 25 && numberJoinery <= 50) {
                price *= 0.91;
            } else if (numberJoinery > 50) {
                price *= 0.86;
            } else if (numberJoinery < 10) {
                console.log("Invalid order");
                return;
            }

            break;
    }


    if (typeDelivery === 'With delivery') {
        priceDelivery = 60;
    }

    let totalPrice = price * numberJoinery + priceDelivery;

    if (numberJoinery > 99) {

        totalPrice *= 0.96;
    }

    console.log(`${totalPrice.toFixed(2)} BGN`);
}
aluminumJoinery(["40",
    "90X130",
    "Without delivery"
])