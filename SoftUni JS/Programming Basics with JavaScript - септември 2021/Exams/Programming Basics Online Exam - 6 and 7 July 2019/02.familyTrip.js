function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceByNight = Number(input[2]);
    let costs = Number(input[3]);

    if (nights > 7) {

        priceByNight = priceByNight * 0.95;
    }

    let totalPriceNights = priceByNight * nights;
    let totalExceptionCosts = budget * costs / 100;
    let totalSum = totalPriceNights + totalExceptionCosts;
    let diff = Math.abs(budget - totalSum);

    if (totalSum <= budget) {

        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }


}
familyTrip(["500",
    "7",
    "66",
    "15"
])