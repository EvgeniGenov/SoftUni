function trainTheTrainers(input) {
    let index = 0;
    let judge = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumScore = 0;
    let counter = 0;
    let totalScore = 0;


    while (command !== 'Finish') {
        let name = command;
        for (let i = 0; i < judge; i++) {
            let score = Number(input[index++]);
            counter++;
            sumScore += score;
            totalScore += score;
        }
        let averageScore = sumScore / judge;
        console.log(`${name} - ${averageScore.toFixed(2)}.`);
        command = input[index++];
        sumScore = 0;

    }
    let averageTotalScore = totalScore / counter;
    console.log(`Student's final assessment is ${averageTotalScore.toFixed(2)}.`);

}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
])