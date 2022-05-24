function arrayModifier(input) {
    let arr = input.shift().split(' ').map(Number);

    for (let element of input) {
        let curElement = element.split(' ');

        if (curElement[0] === 'swap') {
            let indexOfElement1 = Number(curElement[1]);
            let indexOfElement2 = Number(curElement[2]);
            let swapElement = arr.splice(indexOfElement1, 1, 0);
            let swapElement2 = arr.splice(indexOfElement2, 1, 0);
            arr.splice(indexOfElement1, 1, ...swapElement2);
            arr.splice(indexOfElement2, 1, ...swapElement);

        } else if (curElement[0] === 'multiply') {

            let result = arr[curElement[1]] * arr[curElement[2]];
            arr.splice(curElement[1], 1, result);
        } else if (curElement[0] === 'decrease') {

            for (let i = 0; i < arr.length; i++) {
                arr[i] -= 1;
            }


        } else if (curElement[0] === 'end') {
            break;
        }



    }
    console.log(arr.join(', '));


}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);