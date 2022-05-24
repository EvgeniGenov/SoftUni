function sorting(arr) {
    let newArr = [];

    arr.sort((a, b) => b - a);


    while (arr.length > 0) {
        let biggestNumber = arr.shift();
        newArr.push(biggestNumber);
        let smallestNumber = arr.pop();
        newArr.push(smallestNumber);
    }


    console.log(newArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);