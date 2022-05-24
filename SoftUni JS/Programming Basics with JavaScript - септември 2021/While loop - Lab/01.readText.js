function readText(input) {
    let index = 0;
    while (true) {

        let element = input[index++];
        if (element === 'Stop') {
            break;
        }
        console.log(element);

    }

}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"
])