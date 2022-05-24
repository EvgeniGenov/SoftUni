function solve(input) {

    let car = {};

    for (let line of input) {

        let [command, number] = line.split(', ');

        if (command === "IN") {
            car[number] = command;
        } else if (command === 'OUT') {
            delete car[number];
        }
    }

    let plateNumbers = Object.keys(car);

    let sortedNumbers = plateNumbers.sort((a, b) => {
        return a.localeCompare(b);
    })

    for (let number of sortedNumbers) {
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
]);