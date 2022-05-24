function solve(str) {

    let letters = str.split('');
    let result = [];
    let letter = '';

    for (let currentLetter of letters) {

        if (currentLetter !== letter) {
            result.push(currentLetter);
        }
        letter = currentLetter;
    }
    console.log(result.join(""));
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');