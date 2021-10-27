function yardGreening(input) {

    let meters = Number(input[0]);
    let pricePerMeter = 7.61;
    let discount = 0.18;
    let allPrice = meters * pricePerMeter;
    let discountPrice = allPrice * discount;
    let finalPrice = allPrice - discountPrice;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}
yardGreening(["550"])