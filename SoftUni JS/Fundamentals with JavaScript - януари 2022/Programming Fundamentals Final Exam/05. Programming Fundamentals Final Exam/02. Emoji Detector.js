function solve([input]) {

    let coolThreshold = 1;
    // let text = input.join(' ');
    let coolEmojis = [];

    let digits = input.match(/\d/g).map(Number); //връща масив с цифрите

    for (let digit of digits) {
        coolThreshold *= digit;
    }

    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);

    if (emojis !== null) {
        for (let emoji of emojis) {

            let coolness = 0;
            let chars = emoji.slice(2, -2);
            for (let char of chars) {
                coolness += char.charCodeAt(0);
            }

            if (coolness > coolThreshold) {
                coolEmojis.push(emoji)
            }
        }
    }
    console.log('Cool threshold: ' + coolThreshold);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);

    for (let emoji of coolEmojis) {
        console.log(emoji);
    }
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);