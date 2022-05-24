function bestPlayer(input) {
    let index = 0;
    let command = input[index++];
    let max = Number.MIN_SAFE_INTEGER;
    let bestPlayer = '';

    while (command !== 'END') {

        let namePlayer = command;
        let goal = Number(input[index++]);

        if (goal > max) {

            max = goal;
            bestPlayer = namePlayer;
        }
        if (goal >= 10) {
            break;
        }
        command = input[index++];
    }

    console.log(`${bestPlayer} is the best player!`);

    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${max} goals.`);
    }


}
bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"
])