function nameGame(input) {
    let index = 0;
    let command = input[index++];
    let max = Number.MIN_SAFE_INTEGER;
    let winPoints = 0;
    let winName = "";

    while (command !== 'Stop') {

        let name = command;
        let points = 0;

        for (let i = 0; i < name.length; i++) {

            let asciNumber = Number(input[index++]);
            let char = String.fromCharCode(asciNumber);

            if (name.charAt(i) === char) {
                points += 10;

            } else {
                points += 2;
            }

            if (points >= max) {

                max = points;
                winPoints = points;
                winName = name;
            }
        }
        command = input[index++];

    }
    console.log(`The winner is ${winName} with ${winPoints} points!`);


}

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"
])