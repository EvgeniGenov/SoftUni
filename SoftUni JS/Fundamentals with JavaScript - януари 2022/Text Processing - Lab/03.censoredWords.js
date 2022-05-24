function solve(str, word) {

    let tokens = str.split(word);
    console.log(tokens.join("*".repeat(word.length)))
}
solve('A small sentence with some words', 'small')