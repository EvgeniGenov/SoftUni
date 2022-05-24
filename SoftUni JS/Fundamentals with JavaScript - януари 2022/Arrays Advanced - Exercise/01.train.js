function train(string) {
    let wagons = string.shift().split(" ").map(Number);
    let maxCapacity = Number(string.shift());

    for (let element of string) {
        let curElement = element.split(' ');
        if (curElement[0] === 'Add') {
            wagons.push(Number(curElement[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(curElement[0]) <= maxCapacity) {
                    wagons[i] += Number(curElement[0]);
                    break;
                }
            }
        }

    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);