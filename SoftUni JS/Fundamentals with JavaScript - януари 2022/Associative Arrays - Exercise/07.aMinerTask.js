function solve(input) {

    let resource = {};

    for (let i = 0; i < input.length; i++) {

        if (resource.hasOwnProperty(input[i])) {
            resource[input[i]] = Number(resource[input[i]]) + Number(input[i + 1]);
        } else {
            resource[input[i]] = input[i + 1];
        }
        i++
    }



    for (let key in resource) {
        console.log(`${key} -> ${resource[key]}`);
    }

}
// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);
solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]);