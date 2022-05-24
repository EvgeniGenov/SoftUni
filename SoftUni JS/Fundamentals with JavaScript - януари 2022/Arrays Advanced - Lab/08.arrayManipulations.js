function arrayManipulations(arr) {

    let newArr = arr.shift().split(' ');

    for (let element of arr) {
        let current = element.split(' ');

        if (current[0] === 'Add') {
            newArr.push(current[1]);

        } else if (current[0] === 'Remove') {
            for (let index of newArr) {
                if (newArr.includes(current[1])) {
                    let index = newArr.indexOf(current[1]);
                    newArr.splice(index, 1);
                }
            }

        } else if (current[0] === 'RemoveAt') {
            newArr.splice(current[1], 1);

        } else if (current[0] === 'Insert') {
            newArr.splice(current[2], 0, current[1]);


        }
    }
    console.log(newArr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);