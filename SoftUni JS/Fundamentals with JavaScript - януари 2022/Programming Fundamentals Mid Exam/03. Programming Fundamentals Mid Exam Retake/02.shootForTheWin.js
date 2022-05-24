function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;

    while (input[0] !== 'End') {

        let shootIndex = Number(input.shift());

        if (shootIndex >= 0 && shootIndex <= targets.length - 1) {

            let theWin = Number(targets[shootIndex]);

            for (let i = 0; i < targets.length; i++) {

                if (targets[i] !== -1) {

                    if (targets[i] > theWin) {
                        targets[i] -= theWin;

                    } else if (targets[i] <= theWin) {
                        targets[i] += theWin;
                    }
                }
            }

            targets.splice(shootIndex, 1, -1);
            count++;

        }

    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);