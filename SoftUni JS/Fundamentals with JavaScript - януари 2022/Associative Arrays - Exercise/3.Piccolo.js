function solve(input) {

    let parking = {};

    for (let line of input) {

        let [command, number] = line.split(', ');

        if (command === 'IN') {

            parking[number] = command;

        } else if (command === 'OUT') {
            delete parking[number];
        }

    }

    let sorted = Object.keys(parking);
    sorted.sort((a, b) => {
        return a.localeCompare(b)
    });

    for (let number of sorted) {
        console.log(number);
    }



}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])