function solve(str, word) {

    let count = 0;

    let text = str.split(' ');


    for (let w of text) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);

}
solve('This is a word and it also is a sentence',
    'is'
);