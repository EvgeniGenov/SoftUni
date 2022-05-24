function solve(input) {

    let health = 100;
    let bitcoins = 0;

    let tokens = input.split('|');

    for (let element of tokens) {

        let currentElement = element.split(' ');

        let command = currentElement[0];
        let number = Number(currentElement[1]);

        if (command === 'potion') {

            health += number;
            let amount = number;
            if (health > 100) {
                health = 100;


            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
    }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");