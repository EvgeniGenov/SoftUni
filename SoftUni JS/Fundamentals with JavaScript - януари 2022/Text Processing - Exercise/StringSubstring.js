function solve(searchedWord, sentence) {

    let words = sentence.split(' ');
    searchedWord = searchedWord.toLowerCase();

    for (let line of words) {
        line = line.toLowerCase();

        if (searchedWord === line) {
            console.log(searchedWord);
            return;
        }
    }



}

solve('javascript',
    'JavaScript is the best programming language'
);