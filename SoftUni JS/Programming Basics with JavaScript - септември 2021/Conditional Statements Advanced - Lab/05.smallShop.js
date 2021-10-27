function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quality = Number(input[2]);

    //coffee	water	beer	sweets	peanuts

    switch (city) {
        case 'Sofia':

            if (product === 'coffee') {
                console.log(quality * 0.50);
            } else if (product === 'water') {
                console.log(quality * 0.80);
            } else if (product === 'beer') {
                console.log(quality * 1.20);
            } else if (product === 'sweets') {
                console.log(quality * 1.45);
            } else if (product === 'peanuts') {
                console.log(quality * 1.60);
            }

            break;

        case 'Plovdiv':

            if (product === 'coffee') {
                console.log(quality * 0.40);
            } else if (product === 'water') {
                console.log(quality * 0.70);
            } else if (product === 'beer') {
                console.log(quality * 1.15);
            } else if (product === 'sweets') {
                console.log(quality * 1.30);
            } else if (product === 'peanuts') {
                console.log(quality * 1.50);
            }

            break;

        case 'Varna':
            if (product === 'coffee') {
                console.log(quality * 0.45);
            } else if (product === 'water') {
                console.log(quality * 0.70);
            } else if (product === 'beer') {
                console.log(quality * 1.10);
            } else if (product === 'sweets') {
                console.log(quality * 1.35);
            } else if (product === 'peanuts') {
                console.log(quality * 1.55);
            }
            break;

    }


}
smallShop(["sweets",
    "Sofia",
    "2.23"
])