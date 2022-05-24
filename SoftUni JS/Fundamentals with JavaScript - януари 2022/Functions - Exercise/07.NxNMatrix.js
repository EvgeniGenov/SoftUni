function nxNMatrix(num) {
    for (let row = 0; row < num; row++) {
        let printLine = "";

        for (let col = 0; col < num; col++) {
            printLine += num + " ";

        }
        console.log(printLine);
    }
}
nxNMatrix(3);
nxNMatrix(7);
nxNMatrix(2);