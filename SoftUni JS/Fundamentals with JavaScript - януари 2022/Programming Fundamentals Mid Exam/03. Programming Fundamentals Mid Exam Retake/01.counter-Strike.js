function counterStrike(input) {
    let energy = Number(input[0]);

    let index = 1;
    let command = Number(input[index++]);
    let count = 0;

    while (command !== 'End of battle' && energy >= 0) {

        let distance = Number(command);

        if (energy >= distance) {
            energy -= distance;
            count++;
        } else {

            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        }

        if (count % 3 === 0) {
            energy += count;
        }
        command = input[index++];
    }

    if (command === 'End of battle') {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }

}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]);
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]);