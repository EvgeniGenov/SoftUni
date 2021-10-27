function rest(input) {
    let name = input[0];
    let episod = Number(input[1]);
    let rest = Number(input[2]);

    let lunch = rest * 1 / 8;
    let relax = rest * 1 / 4;

    let total = rest - lunch - relax;
    let diff = Math.abs(total - episod);

    if (total >= episod) {

        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)

    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }



}
rest(["Game of Thrones",
    "48",
    "60"
])