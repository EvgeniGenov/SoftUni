function solve(input) {

    let result = {};

    input = input.toLowerCase().split(' ');

    for (let element of input) {

        if (result.hasOwnProperty(element)) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    }

    let filtered = Object.entries(result);
    filtered = filtered.filter((el) => el[1] % 2 !== 0);
    let output = [];

    for (let line of filtered) {
        output.push(line[0]);
    }

    console.log(output.join(' '));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')