function solve(word) {

    let what = word.charAt(3);
    what = word.charCodeAt('&');
    what = String.fromCharCode(97);
    let letter = word.indexOf('h');
    console.log(letter);

}
solve('hello')