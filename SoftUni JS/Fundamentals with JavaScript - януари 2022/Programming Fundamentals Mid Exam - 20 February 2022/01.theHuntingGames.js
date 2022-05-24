function theHuntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let water = days * players * waterPerDay;
    let foodPerDay = Number(input.shift());
    let food = days * players * foodPerDay;
    let currentDay = 0;

    while (input.length > 0) {
        currentDay++;
        days--;

        let certainEnergy = Number(input.shift());
        energy -= certainEnergy;


        if (currentDay % 2 === 0) {
            energy += energy * 0.05;
            water -= water * 0.30;
        }

        if (currentDay % 3 === 0) {
            food -= food / players;
            energy += energy * 0.10;
        }
        if (energy <= 0) {
            break;
        }

    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }

}
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330",
]);
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"
]);