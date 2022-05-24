function dungeonestDark(string) {
    let health = 100;
    let coins = 0;
    let rooms = 0;
    let healthPoints = 0;


    let arrToString = string.join('');
    let arr1 = arrToString.split('|');
    let arr1ToString = arr1.join(' ');
    let arr2 = arr1ToString.split(' ');

    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 === 0) {
            for (let j = i + 1; j < i + 2; j++) {

                if (arr2[i] === 'potion') {
                    rooms++;
                    let diff = Math.abs(100 - health);
                    health += Number(arr2[j]);

                    if (diff < Number(arr2[j])) {
                        healthPoints = diff;
                    } else {
                        healthPoints = Number(arr2[j]);
                    }


                    if (health > 100) {
                        health = 100;
                    }
                    console.log(`You healed for ${Number(healthPoints)} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else if (arr2[i] === 'chest') {
                    rooms++;
                    coins += Number(arr2[j]);
                    console.log(`You found ${Number(arr2[j])} coins.`);
                } else if (health > 0) {
                    health -= Number(arr2[j]);
                    rooms++;
                    if (health > 0) {
                        console.log(`You slayed ${arr2[i]}.`);
                    } else {
                        console.log(`You died! Killed by ${arr2[i]}.`);
                        console.log(`Best room: ${rooms}`);
                        return;
                    }
                }
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);