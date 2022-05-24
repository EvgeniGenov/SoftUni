function solve(input) {

    let text = input;
    let result = [];
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let match = pattern.exec(text);

    while (match != null) {

        result.push(match[0]);
        match = pattern.exec(text);
    }
    console.log(result.join(' '));

}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");