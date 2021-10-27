function lunchBreak(input) {
    let nameOfMovie = input[0];
    let durationMovie = Number(input[1]);
    let durationLunch = Number(input[2]);

    let timeLunch = durationLunch * 0.125;
    let timeRelax = durationLunch * 0.25;

    let restTime = durationLunch - timeRelax - timeLunch;
    let diff = Math.abs(durationMovie - restTime);

    if (restTime >= durationMovie) {

        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(diff)} minutes free time.`);

    } else {

        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(diff)} more minutes.`);

    }

}

lunchBreak(["Game of Thrones",
    "60",
    "96"
])