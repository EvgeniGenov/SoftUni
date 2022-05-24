function processOddNumbers(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let doubledNumber = 0;

        if (i % 2 !== 0) {
            doubledNumber = Number(arr[i]) * 2;
            arr2.push(doubledNumber);

        }
    }
    console.log(arr2.reverse().join(' '));
}

function process(arr) {

    let filtered = arr.filter((x, i) => i % 2 === 1); // връща нечетния индекс. манипулира индекса, но връща в променливата елемента;
    let doubled = filtered.map(x => x * 2);
    let result = doubled.reverse();
    console.log(result.join(' '));

}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3]);