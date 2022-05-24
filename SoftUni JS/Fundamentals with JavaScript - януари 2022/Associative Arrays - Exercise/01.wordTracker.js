function solve(input) {
    let words = input.shift().split(' ');

    let result = {};

    for (let word of words) {
        result[word] = 0;
    }

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => {
        let valueA = a[1];
        let valueB = b[1];

        return valueB - valueA;
    });

    for (let word of sorted) {
        console.log(word[0], '-', word[1]);
    }

    let arr = ['a', 'b', 's', 'x'];
    let sortedArr = arr.sort((a, b) => b.localeCompare(a));
    console.log(sortedArr);
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);