function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let starPoints = Number(input[index]);
    index++;
    let evaluating = Number(input[index]);
    index++;
    let maxResult = 1250.5;
    let enoughPoints = false;

    for (let i = 0; i < evaluating; i++) {

        let nameEvaluating = input[index];
        index++;
        let pointsEvaluating = Number(input[index]);
        index++;

        starPoints += (nameEvaluating.length * pointsEvaluating) / 2;

        if (starPoints >= maxResult) {
            enoughPoints = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${starPoints.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(starPoints - maxResult);
    if (!enoughPoints) {

        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
])