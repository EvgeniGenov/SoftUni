function revealWords(words, text) {

    words = words.split(', ');
    text = text.split(' ');


    for (let word of words) {

        for (let words of text) {

            if (words.includes("*") && words.length === word.length) {
                let indexOf = text.indexOf(words);
                text.splice(indexOf, 1, word);
            }

        }

    }
    console.log(text.join(' '));


}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);