function gladiatorInventory(string) {


    let equipment = string.shift().split(' ');



    for (let element of string) {
        let command = element.split(' ');

        if (command[0] === 'Buy' && !equipment.includes(command[1])) {
            equipment.push(command[1]);


        } else if (command[0] === 'Trash' && equipment.includes(command[1])) {
            let indexOfElement = equipment.indexOf(command[1]);
            equipment.splice(indexOfElement, 1);

        } else if (command[0] === 'Repair' && equipment.includes(command[1])) {
            let indexOfElement = equipment.indexOf(command[1]);
            let element = equipment.splice(indexOfElement, 1).join('');
            equipment.push(element);
        } else if (command[0] === 'Upgrade') {
            let splitElement = command[1].split('-')

            for (let element of splitElement) {
                if (equipment.includes(element)) {
                    let indexOfElement = equipment.indexOf(splitElement[0]);
                    equipment.splice(indexOfElement + 1, 0, `${splitElement[0]}:${splitElement[1]}`);
                }

            }

        }

    }
    console.log(equipment.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);