function solve(input) {

    let words = input.shift().split(' ');

    let obj = {};

    for (let word of words) {
        obj[word] = 0;
    }

    for (let word of input) {

        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
    }

    let sorted = Object.entries(obj);
    sorted.sort((a, b) => {

        let valueA = a[1];
        let valueB = b[1];
        return valueB - valueA;

    });

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }

}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);