function stringSubstring(word, text) {

    word = word.toLocaleLowerCase();
    text = text.split(' ');
    let isFind = false;

    for (let w of text) {

        w = w.toLocaleLowerCase();

        if (w === word) {
            console.log(word);
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);
stringSubstring('python',
    'JavaScript is the best programming language'
);