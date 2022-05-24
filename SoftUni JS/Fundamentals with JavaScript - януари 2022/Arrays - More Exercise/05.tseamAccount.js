function tseamAccount(arr) {

    let firstElement = arr.shift();
    let tseamAccount = firstElement.split(' ');
    let newArr = arr.join(' ').split(' ');

    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < i + 2; j++) {

            if (newArr[i] === 'Install') {

                if (!tseamAccount.includes(newArr[j])) {
                    tseamAccount.push(newArr[j]);

                }

            } else if (newArr[i] === 'Uninstall') {
                if (tseamAccount.includes(newArr[j])) {
                    let element = newArr[j];
                    let result = tseamAccount.indexOf(element);
                    tseamAccount.splice(result, 1);

                }

            } else if (newArr[i] === 'Update') {
                if (tseamAccount.includes(newArr[j])) {
                    let element = newArr[j];
                    let result = tseamAccount.indexOf(element);
                    tseamAccount.splice(result, 1);
                    tseamAccount.push(element);

                }

            } else if (newArr[i] === 'Expansion') {

                let element = newArr[j];
                let newElement = element.split('-');
                let game = newElement[0];
                if (tseamAccount.includes(game)) {
                    let expandedGame = newElement.join(':');
                    let index = tseamAccount.indexOf(game);
                    tseamAccount.splice(index + 1, 0, expandedGame);


                }
            } else if (newArr[i] === 'Play!') {
                continue;
            }
        }
    }
    console.log(tseamAccount.join(' '));
}
// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);