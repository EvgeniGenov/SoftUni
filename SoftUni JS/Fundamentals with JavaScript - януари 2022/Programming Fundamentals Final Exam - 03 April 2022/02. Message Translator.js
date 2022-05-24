function solve(input) {

    let n = input.shift();
    let pattern = /(!)([A-Z][a-z]{2,})\1:\[([A-Za-z]{8,})\]/g;
    let result = [];

    while (n > 0) {
        n--;
        let text = input.shift();
        let match = pattern.exec(text);

        if (match === null) {
            console.log('The message is invalid');
        } else {
            let command = match[2];
            let string = match[3];

            for (let char of string) {
                result.push(char.charCodeAt(0));
            }
            console.log(`${command}: ${result.join(' ')}`);
        }

    }

}
solve(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
]);
solve(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]);