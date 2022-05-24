function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let finalPyramidHeight = 0;
    let step = 1;
    let top = base % 2 === 0 ? 2 : 1;


    while (base > top) {

        if (step % 5 === 0) {
            stone += Math.pow(base - 2, 2);
            lapisLazuli += Math.pow(base, 2) - Math.pow(base - 2, 2);
            base -= 2;
            step++;
            continue;
        }
        stone += Math.pow(base - 2, 2);
        marble += Math.abs(Math.pow(base, 2) - Math.pow(base - 2, 2));


        base -= 2;
        step++;
    }
    gold += Math.pow(base, 2);

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(gold * increment);
    finalPyramidHeight = Math.floor(step * increment);



    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${finalPyramidHeight}`);


}
// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(23, 0.5);
// thePyramidOfKingDjoser(12, 1);