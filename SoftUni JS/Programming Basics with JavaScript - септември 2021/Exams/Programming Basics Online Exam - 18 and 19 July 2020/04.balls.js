function balls(input) {
    let index = 0;
    let numberBalls = Number(input[index++]);
    let points = 0;
    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let divideCounter = 0;
    let otherBalls = 0;

    //“red”, “orange”, “yellow”, “white”, “black”

    for (let i = 1; i <= numberBalls; i++) {

        let colorBalls = input[index++];

        if (colorBalls === 'red') {
            points += 5;
            redCounter++;

        } else if (colorBalls === 'orange') {
            points += 10;
            orangeCounter++;

        } else if (colorBalls === 'yellow') {
            points += 15;
            yellowCounter++;

        } else if (colorBalls === 'white') {
            points += 20;
            whiteCounter++;

        } else if (colorBalls === 'black') {
            points = Math.floor(points / 2);
            divideCounter++;

        } else {
            otherBalls++;

        }

    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${divideCounter}`);

}
balls(["3",
    "white",
    "black",
    "pink"
])