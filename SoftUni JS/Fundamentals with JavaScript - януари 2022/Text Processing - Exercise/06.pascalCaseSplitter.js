function solve(str) {

    let words = [];
    let thisLetter = "";
    let j = 0;

    for (let i = 0; i < str.length; i++) {

        if (/^[A-Z]+$/.test(str[i])) {
            words.push("");
        }

        thisLetter = str.substring(i, i + 1);

        if (thisLetter === thisLetter.toUpperCase()) {

            if (i !== 0) {

                j++
            }
        }
        words[j] += thisLetter;
    }

    console.log(words.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');