function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.10;

    if (people > 150) {
        clothes = clothes * 0.90;
    }

    let total = decor + people * clothes;
    let diff = Math.abs(total - budget);

    if (total > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);

    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["9587.88",
    "222",
    "55.68"
])