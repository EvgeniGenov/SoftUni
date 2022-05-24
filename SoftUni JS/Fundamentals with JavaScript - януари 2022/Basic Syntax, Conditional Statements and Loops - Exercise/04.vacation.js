function vacation(group, type, day) {

    // Friday Saturday Sunday
    // Students 8.45 9.80 10.46
    // Business 10.90 15.60 16
    // Regular 15 20 22.50




    // let studentsFridayPrice = 8.45;
    // let businessFridayPrice = 10.90;
    // let regularFridayPrice = 15;
    // let studentsSaturdayPrice = 9.80;
    // let businessSaturdayPrice = 15.60;
    // let regularSaturdayPrice = 20;
    // let studentsSundayPrice = 10.46;
    // let businessSundayPrice = 16;
    // let regularSundayPrice = 22.50;




    let price = 0;
    let total = 0;

    switch (day) {

        case 'Friday':
            if (type === 'Students') {
                price = 8.45;
            } else if (type === 'Business') {
                price = 10.90;
            } else if (type === 'Regular') {
                price = 15;
            }

            break;

        case 'Saturday':
            if (type === 'Students') {
                price = 9.80;
            } else if (type === 'Business') {
                price = 15.60;
            } else if (type === 'Regular') {
                price = 20;
            }

            break;

        case 'Sunday':
            if (type === 'Students') {
                price = 10.46;
            } else if (type === 'Business') {
                price = 16;
            } else if (type === 'Regular') {
                price = 22.50;
            }
            break;
    }

    if (type === 'Students' && group >= 30) {
        total = group * price * 0.85;
    } else if (type === 'Business' && group >= 100) {
        total = group * price - price * 10;
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        total = group * price * 0.95;
    } else {
        total = group * price;
    }
    console.log(`Total price: ${total.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");