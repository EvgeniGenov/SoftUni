function shoppingList(input) {
    let list = input.shift().split('!');


    while (input[0] !== "Go Shopping!") {

        let command = input.shift().split(' ');


        switch (command[0]) {

            case 'Urgent':

                if (!list.includes(command[1])) {
                    list.unshift(command[1]);
                }
                break;

            case 'Unnecessary':
                if (list.includes(command[1])) {
                    let indexOfItem = list.indexOf(command[1]);
                    list.splice(indexOfItem, 1);
                }
                break;

            case 'Correct':
                if (list.includes(command[1])) {
                    let indexOfItem = list.indexOf(command[1]);
                    list.splice(indexOfItem, 1, command[2]);

                }
                break;

            case 'Rearrange':
                if (list.includes(command[1])) {
                    let indexOfItem = list.indexOf(command[1]);
                    list.splice(indexOfItem, 1);
                    list.push(command[1]);

                }
                break;
        }
    }
    console.log(list.join(', '));


}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);