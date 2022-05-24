function solve(input) {

    let text = input.shift();


    while (input[0] != 'Reveal') {

        let tokens = input.shift().split(':|:');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === 'InsertSpace') {

            let left = text.substring(0, Number(p1));
            let right = text.substring(Number(p1));
            text = left + ' ' + right;

            console.log(text);
        } else if (command === 'Reverse') {

            if (text.includes(p1)) {

                let reversedWord = p1.split('').reverse().join('');
                let index = text.indexOf(p1);
                let indexEnd = Number(p1.length);
                let leftPart = text.substring(0, index);
                let rightPart = text.substring(index + indexEnd);
                text = leftPart + rightPart + reversedWord;
                console.log(text);


            } else {
                console.log('error');
            }

        } else if (command === 'ChangeAll') {

            text = text.split(p1).join(p2);
            console.log(text);

        }


    }
    console.log(`You have a new text message: ${text}`);

}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);