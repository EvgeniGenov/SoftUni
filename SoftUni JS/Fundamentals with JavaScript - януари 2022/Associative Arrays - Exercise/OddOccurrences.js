function solve(input) {

    input = input.toLocaleLowerCase().split(" ");

    let result = {};

    for (let word of input) {

        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }

    let sorted = Object.entries(result);

    let oddElements = sorted.filter((el) => { return el[1] % 2 !== 0 });
    let output = [];

    for (let element of oddElements) {

        output.push(element[0]);
    }
    console.log(output.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');