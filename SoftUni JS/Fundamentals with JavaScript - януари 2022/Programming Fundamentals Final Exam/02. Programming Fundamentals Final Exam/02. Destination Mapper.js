function solve(input) {

    let text = input;

    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/gm;

    let match = pattern.exec(text);
    let result = [];
    let points = 0;

    while (match != null) {

        let city = match[2];
        result.push(city);
        points += city.length;

        match = pattern.exec(text);
    }
    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");