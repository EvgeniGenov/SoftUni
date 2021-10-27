function petShop(input) {
    let foodDog = Number(input[0]);
    let foodCat = Number(input[1]);

    let costDog = foodDog * 2.50;
    let costCat = foodCat * 4;
    let total = costCat + costDog;

    console.log(`${total} lv.`);
}

petShop(["5 ",
    "4 "
])