function arrayRotation(arr, num) {
    let newArr = arr;
    for (let i = 0; i < num; i++) {
        let elementToMove = arr.shift();
        newArr.push(elementToMove)

    }

    console.log(newArr.join(' '));

}
arrayRotation([32, 21, 61, 1], 4)