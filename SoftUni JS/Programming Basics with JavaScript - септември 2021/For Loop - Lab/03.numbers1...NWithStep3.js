function numbers1NWithStep3(input) {

    let n = Number(input[0]);
    let step = 2;
    for (let i = 1; i <= n; i++) {

        console.log(i);
        i += step;
    }


}
numbers1NWithStep3(["15"])