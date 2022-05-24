function footballTournament(input) {
    let index = 0;
    let nameOfTeam = input[index++];
    let games = Number(input[index++]);
    let goals = 0;
    let totalW = 0;
    let totalD = 0;
    let totalL = 0;

    for (let i = 0; i < games; i++) {

        let result = input[index++];

        if (result === 'W') {
            goals += 3;
            totalW++;

        } else if (result === 'D') {
            goals += 1;
            totalD++;

        } else {
            totalL++;
        }
    }
    if (games === 0) {
        console.log(`${nameOfTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${nameOfTeam} has won ${goals} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${totalW}`);
        console.log(`## D: ${totalD}`);
        console.log(`## L: ${totalL}`);
        console.log(`Win rate: ${Math.abs(totalW/games*100).toFixed(2)}%`);
    }
}
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"
])