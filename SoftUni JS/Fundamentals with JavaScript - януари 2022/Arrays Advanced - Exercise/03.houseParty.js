function houseParty(arr) {
    let list = [];

    for (let element of arr) {
        let curElement = element.split(' ');


        for (let i = 0; i < curElement.length; i++) {


            if (curElement.includes('not') && !list.includes(curElement[0])) {
                console.log(`${curElement[0]} is not in the list!`);
                break;
            } else if (curElement.includes('not') && list.includes(curElement[0])) {
                let indexOfName = list.indexOf(curElement[0]);
                list.splice(indexOfName, 1);
                break;

            } else if (list.includes(curElement[0])) {
                console.log(`${curElement[0]} is already in the list!`);
                break;
            } else {
                list.push(curElement[0]);
                break;
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);