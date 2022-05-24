function charactersInRange(string1, string2) {
    let charList = " ";

    let asciiNumberPostionString1 = string1.charCodeAt();
    let asciiNumberPostionString2 = string2.charCodeAt();
    let min = Math.min(asciiNumberPostionString1, asciiNumberPostionString2);
    let max = Math.max(asciiNumberPostionString1, asciiNumberPostionString2);

    for (let i = min + 1; i < max; i++) {
        charList += String.fromCharCode(i) + " ";
    }

    console.log(charList);
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');