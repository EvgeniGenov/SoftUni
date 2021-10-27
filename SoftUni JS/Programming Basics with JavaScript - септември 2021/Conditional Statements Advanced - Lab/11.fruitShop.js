function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quality = Number(input[2]);
    let totalSum = 0;


    //banana	apple	orange	grapefruit	kiwi	pineapple	grapes

    switch (day) {

        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (fruit === 'banana') {
                totalSum = quality * 2.50;
            } else if (fruit === 'apple') {
                totalSum = quality * 1.20;
            } else if (fruit === 'orange') {
                totalSum = quality * 0.85;
            } else if (fruit === 'grapefruit') {
                totalSum = quality * 1.45;
            } else if (fruit === 'kiwi') {
                totalSum = quality * 2.70;
            } else if (fruit === 'pineapple') {
                totalSum = quality * 5.50;
            } else if (fruit === 'grapes') {
                totalSum = quality * 3.85;
            }

            if (totalSum <= 0) {
                console.log("error");
            } else {
                console.log(totalSum.toFixed(2));
            }
            break;


        case 'Saturday':
        case 'Sunday':
            if (fruit === 'banana') {
                totalSum = quality * 2.70;
            } else if (fruit === 'apple') {
                totalSum = quality * 1.25;
            } else if (fruit === 'orange') {
                totalSum = quality * 0.90;
            } else if (fruit === 'grapefruit') {
                totalSum = quality * 1.60;
            } else if (fruit === 'kiwi') {
                totalSum = quality * 3;
            } else if (fruit === 'pineapple') {
                totalSum = quality * 5.60;
            } else if (fruit === 'grapes') {
                totalSum = quality * 4.20;
            }

            if (totalSum <= 0) {
                console.log("error");
            } else {
                console.log(totalSum.toFixed(2));
            }
            break;

        default:
            console.log("error");
            break;
    }

}
fruitShop(["grapes",
    "Saturday",
    "0.5"
])