function sequence(input) {
    let n = Number(input[0]);
    let next = 1;

    while (next <= n) {

        console.log(next);
        next = next * 2 + 1;

    }


}
sequence(["3"])