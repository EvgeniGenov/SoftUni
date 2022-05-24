function carWash(arr) {
    let clean = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'soap') {
            clean += 10;
        } else if (arr[i] === 'water') {
            clean += clean * 20 / 100;

        } else if (arr[i] === 'vacuum cleaner') {
            clean += clean * 25 / 100;

        } else if (arr[i] === 'mud') {
            clean -= clean * 10 / 100;
        }
    }
    if (clean > 100) {
        console.log("The car is 100% clean.");
    } else {
        console.log(`The car is ${clean.toFixed(2)}% clean.`);

    }

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
carWash(["soap"]);