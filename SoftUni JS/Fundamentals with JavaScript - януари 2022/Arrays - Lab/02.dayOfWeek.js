function dayOfWeek(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log('Invalid day!');
    }


}

function numToDay(num) {

    return num <= 7 && num >= 1 ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][num - 1] :
        'Invalid day!';


}



dayOfWeek(3);
numToDay(2);