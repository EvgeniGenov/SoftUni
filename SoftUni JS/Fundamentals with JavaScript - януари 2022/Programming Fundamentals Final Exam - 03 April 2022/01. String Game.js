function solve(input) {

    let string = input.shift();

    while (input[0] != 'Done') {

        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === 'Change') {

            string = string.split(p1).join(p2);
            console.log(string);

        } else if (command === 'Includes') {

            if (string.includes(p1)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === 'End') {

            if (string.endsWith(p1)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === 'Uppercase') {

            string = string.toUpperCase();
            console.log(string);

        } else if (command === 'FindIndex') {

            let indexOfChar = string.indexOf(p1);
            console.log(indexOfChar);

        } else if (command === 'Cut') {

            let start = Number(p1);
            let end = Number(p1) + Number(p2);
            let part = string.substring(start, end);
            console.log(part);

        }
    }
}
solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
])
solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);