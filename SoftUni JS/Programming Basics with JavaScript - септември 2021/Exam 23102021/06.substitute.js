function substitute(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);
    let counter = 0;

    for (let i = a; i <= 8; i++) {

        for (let j = 9; j >= b; j--) {

            for (let x = c; x <= 8; x++) {

                for (let y = 9; y >= d; y--) {

                    if (counter === 6) {
                        break;
                    }

                    if (i % 2 === 0 && j % 2 !== 0 && x % 2 === 0 && y % 2 !== 0 && i === x && j === y) {
                        console.log(`Cannot change the same player.`);

                    } else if (i % 2 === 0 && j % 2 !== 0 && x % 2 === 0 && y % 2 !== 0) {

                        console.log(`${i}${j} - ${x}${y}`);
                        counter += 1;

                    }

                }
            }
        }

    }

}
substitute(["6",
    "7",
    "5",
    "6"
])