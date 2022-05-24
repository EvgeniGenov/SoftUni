function rightPlace(string, char, result) {
    let res = string.replace('_', char);
    let output = result === res ? "Matched" : "Not Matched";

    console.log(output);


}
rightPlace('Str_ng', 'i', 'String')