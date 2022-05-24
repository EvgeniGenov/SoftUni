function arrayManipulator(arr, string) {

    for (let element of string) {
        let command = element.split(' ');

        if (command[0] === 'add') {
            arr.splice(command[1], 0, Number(command[2]));

        } else if (command[0] === 'addMany') {
            let numbers = command.slice(2, command.length);
            let arrOfNumber = numbers.map((el) => { return Number(el) })
            arr.splice(command[1], 0, ...arrOfNumber);

        } else if (command[0] === 'contains') {
            let indexOfElement = arr.indexOf(Number(command[1]));
            console.log(indexOfElement);

        } else if (command[0] === 'remove') {

            arr.splice(command[1], 1);

        } else if (command[0] === 'shift') {

            for (let i = 0; i < command[1]; i++) {
                let element = arr.shift();
                arr.push(element);
            }

        } else if (command[0] === 'sumPairs') {
            let resArr = [];

            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            for (let i = 0; i < arr.length - 1; i += 2) {
                let sum = arr[i] + arr[i + 1];
                resArr.push(sum);
            }
            arr = resArr;

        } else if (command[0] === 'print') {

            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);