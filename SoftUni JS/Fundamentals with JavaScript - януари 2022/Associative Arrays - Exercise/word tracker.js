function solve(input) {

    let words = input.shift().split(' ');

    let result = {};

    for (let word of words) {
        result[word] = 0;
    }


    for (let line of input) {

        if (result.hasOwnProperty(line)) {
            result[line] += 1;
        }

    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => {

        let valueA = a[1];
        let valueB = b[1];
        valueB - valueA;
    })


    for (let [word, count] of sorted) {

        console.log(`${word} - ${count}`);


    }


}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])