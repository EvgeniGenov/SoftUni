function sortNumbers(x, y, z) {


    if (x > y && x > z) {
        if (y > z) {
            console.log(x);
            console.log(y);
            console.log(z);
        } else {
            console.log(x);
            console.log(z);
            console.log(y);
        }
    } else if (y > x && y > z) {
        if (x > z) {
            console.log(y);
            console.log(x);
            console.log(z);
        } else {
            console.log(y);
            console.log(z);
            console.log(x);
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(z);
            console.log(x);
            console.log(y);
        } else {
            console.log(z);
            console.log(y);
            console.log(z);
        }
    }
}

sortNumbers(1, -2, 3);