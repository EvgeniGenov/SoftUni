function pcGameShop(input) {
    let index = 0;
    let numberGames = Number(input[index++]);
    let totalHearthstone = 0;
    let totalFornite = 0;
    let totalOverwatch = 0;
    let totalOthers = 0;

    //Hearthstone, Fornite, Overwatch, Others


    for (let i = 0; i < numberGames; i++) {

        let nameOfGame = input[index++];

        if (nameOfGame === 'Hearthstone') {
            totalHearthstone += 1 / numberGames * 100;
        } else if (nameOfGame === 'Fornite') {
            totalFornite += 1 / numberGames * 100;
        } else if (nameOfGame === 'Overwatch') {
            totalOverwatch += 1 / numberGames * 100;
        } else {
            totalOthers += 1 / numberGames * 100;
        }

    }
    console.log(`Hearthstone - ${totalHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${totalFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${totalOverwatch.toFixed(2)}%`);
    console.log(`Others - ${totalOthers.toFixed(2)}%`);

}
pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
])