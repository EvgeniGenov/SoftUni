function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 1;

    while (grades <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.0) {
            excluded++;
            if (excluded > 1) {
                break;
            }
            continue;
        }

        sum += grade;
        grades++;
    }

    let average = sum / 12; //TODO: print the output

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
])