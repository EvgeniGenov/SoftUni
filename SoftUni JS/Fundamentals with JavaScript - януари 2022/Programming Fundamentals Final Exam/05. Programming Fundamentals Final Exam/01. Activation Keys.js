function solve(input) {

    let raw = input.shift();

    while (input[0] !== "Generate") {

        let tokens = input.shift().split(">>>");

        if (tokens[0] === "Contains") {
            let substring = tokens[1];
            if (raw.includes(substring)) {
                console.log(`${raw} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }

        if (tokens[0] === "Flip") {

            let command = tokens[1];
            let start = tokens[2];
            let end = tokens[3];

            let key = raw.substring(start, end);

            if (command === 'Upper') {

                keyUpper = key.toUpperCase();
                raw = raw.replace(key, keyUpper);
                console.log(raw);
            } else {

                keyLower = key.toLowerCase();
                raw = raw.replace(key, keyLower);
                console.log(raw);
            }

        }

        if (tokens[0] === 'Slice') {

            let start = tokens[1];
            let end = tokens[2];
            let key = raw.substring(start, end);
            raw = raw.split(key).join("");
            console.log(raw);

        }

    }
    console.log(`Your activation key is: ${raw}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);