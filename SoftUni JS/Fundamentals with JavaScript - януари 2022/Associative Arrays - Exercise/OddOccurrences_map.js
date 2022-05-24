function solve(input) {
    input = input.toLocaleLowerCase().split(' ');

    let map = new Map();

    for (let word of input) {

        count = 0;

        if (map.has(word)) {

            count = map.get(word);

        }
        count++;
        map.set(word, count);
    }

    let filtered = Array.from(map);
    filtered = filtered.filter((el) => { return el[1] % 2 === 1 });

    let output = [];

    for (let element of filtered) {
        output.push(element[0]);

    }
    console.log(output.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');