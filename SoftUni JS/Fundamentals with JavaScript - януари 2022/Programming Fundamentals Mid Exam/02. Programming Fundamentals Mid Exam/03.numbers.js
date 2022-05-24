function numbers(integers) {

    let arr = integers.split(' ');
    arr.sort((a, b) => b - a);
    let newArr = [];
    let sum = 0;

    for (let element of arr) {
        sum += Number(element);
    }

    let averageNumber = sum / arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > averageNumber) {
            newArr.push(arr[i]);
        }
    }

    let fiveGreaterNumbers = newArr.slice(0, 5).join(' ');

    if (fiveGreaterNumbers === '') {
        console.log('No');
    } else {
        console.log(fiveGreaterNumbers);
    }

}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');