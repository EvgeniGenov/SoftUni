function catWalking(input) {
    let minWalk = Number(input[0]);
    let countWalk = Number(input[1]);
    let calories = Number(input[2]);
    let calPerDay = calories * 0.50;
    let totalMin = minWalk * countWalk;
    let burnCal = totalMin * 5;

    if (burnCal >= calPerDay) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCal}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCal}.`);
    }

}
catWalking(["15",
    "2",
    "500"
])