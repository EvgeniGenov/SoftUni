function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index++];
    let word = '';
    let max = Number.MIN_SAFE_INTEGER;
    let totalPoints = 0;
    let winPoints = 0;
    let winWord = '';
    //'a', 'e', 'i', 'o', 'u', 'y
    //'A', 'E', 'I', 'O', 'U', 'Y'

    while (command !== "End of words") {

        word = command;
        let sumPoints = 0;

        for (let i = 0; i < word.length; i++) {

            sumPoints += word.charCodeAt(i);

        }

        if (word.charAt(0) === 'a' || word.charAt(0) === 'e' || word.charAt(0) === 'i' || word.charAt(0) === 'o' || word.charAt(0) === 'u' || word.charAt(0) === 'y' || word.charAt(0) === 'A' ||
            word.charAt(0) === 'E' || word.charAt(0) === 'I' || word.charAt(0) === 'O' || word.charAt(0) === 'U' || word.charAt(0) === 'Y') {

            totalPoints = sumPoints * Number(word.length);


        } else {
            totalPoints = Math.floor(sumPoints / Number(word.length));
        }

        if (totalPoints > max) {

            max = totalPoints;
            winPoints = totalPoints;
            winWord = word;
        }

        command = input[index++];
    }

    console.log(`The most powerful word is ${winWord} - ${winPoints}`);

}
theMostPowerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"
])