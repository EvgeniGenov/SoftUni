function exam(input) {
    let index = 0;
    let students = Number(input[index++]);
    let counter = 0;
    let fail = 0;
    let between34 = 0;
    let between45 = 0;
    let topStudents = 0;
    let allScore = 0;

    for (let i = 0; i < students; i++) {

        let score = Number(input[index++]);
        counter++;

        if (score <= 2.99) {
            fail++;
            allScore += score;
        } else if (score >= 3 && score <= 3.99) {
            between34++;
            allScore += score;
        } else if (score >= 4 && score <= 4.99) {
            between45++;
            allScore += score;
        } else if (score >= 5) {
            topStudents++;
            allScore += score;
        }

    }

    let percentageTopStudents = topStudents / students * 100;
    let percentageBetween45 = between45 / students * 100;
    let percentageBetween34 = between34 / students * 100;
    let percentageFail = fail / students * 100;

    let average = (allScore / students);

    console.log(`Top students: ${percentageTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentageBetween45.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentageBetween34.toFixed(2)}%`);
    console.log(`Fail: ${percentageFail.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}
exam(['10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'
])