function energyBooster(input) {
    let fruit = input[0];
    let sizes = input[1];
    let orders = Number(input[2]);
    let totalSum = 0;
    // "Watermelon", "Mango", "Pineapple" или "Raspberry"
    switch (sizes) {
        case 'small':
            if (fruit === "Watermelon") {
                totalSum = orders * 56 * 2;
            } else if (fruit === "Mango") {
                totalSum = orders * 36.66 * 2;
            } else if (fruit === "Pineapple") {
                totalSum = orders * 42.10 * 2;
            } else if (fruit === "Raspberry") {
                totalSum = orders * 20 * 2;
            }
            break;
        case 'big':
            if (fruit === "Watermelon") {
                totalSum = orders * 28.70 * 5;
            } else if (fruit === "Mango") {
                totalSum = orders * 19.60 * 5;
            } else if (fruit === "Pineapple") {
                totalSum = orders * 24.80 * 5;
            } else if (fruit === "Raspberry") {
                totalSum = orders * 15.20 * 5;
            }

            break;
    }


    if (totalSum >= 400 && totalSum <= 1000) {
        totalSum = totalSum * 0.85;
        console.log(`${totalSum.toFixed(2)} lv.`)
    } else if (totalSum > 1000) {
        totalSum = totalSum * 0.50;
        console.log(`${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`${totalSum.toFixed(2)} lv.`);
    }
}
energyBooster(["Pineapple",
    "small",
    "1"
])