function solve(input) {

    let text = input[0];

    let pattern = /([#]|[\|])([A-Za-z\s]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]{1,5})\1/g
    let caloriesPerDay = 2000;
    let totalCalories = 0;
    let result = [];

    let match = pattern.exec(text);

    while (match != null) {

        let product = match[2];
        let date = match[3];
        let calories = Number(match[4]);

        result.push(`Item: ${product}, Best before: ${date}, Nutrition: ${calories}`)
        totalCalories += calories;
        match = pattern.exec(text);
    }

    let days = Math.floor(totalCalories / caloriesPerDay);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(result.join('\n'));

}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);