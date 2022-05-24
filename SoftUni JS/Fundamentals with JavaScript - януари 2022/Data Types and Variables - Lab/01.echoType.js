function echoType(input) {

    let result = typeof(input);
    if (input === null) {
        console.log(result);
        console.log("Parameter is not suitable for printing");
    } else {

        console.log(result);
        console.log(input);
    }
}
echoType(null)