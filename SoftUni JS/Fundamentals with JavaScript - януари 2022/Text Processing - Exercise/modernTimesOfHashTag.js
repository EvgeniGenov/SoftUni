function solve(str) {

    let words = str.split(' ');

    for (let word of words) {

        if (word.startsWith('#') && word.length > 1) {

            for (let char of word) {

                asciiCode = char.charCodeAt(0);
                let isLetter = ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122));

                if (isLetter) {
                    console.log(word.substring(1, word.length));

                }
            }
        }
    }
    solve('Nowadays everyone uses # to tag a #speciаl word in #socialMedia')