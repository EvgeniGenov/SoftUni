function searchForANumber(arr, nums) {
    let elementsForTakes = nums[0];
    let elementsForDelete = nums[1];
    let specialNumber = nums[2];

    let newArr = arr.slice(0, elementsForTakes);
    newArr.splice(0, elementsForDelete);

    let count = 0;
    for (let nums of newArr) {
        if (nums === specialNumber) {
            count++
        }
    }

    console.log(`Number ${specialNumber} occurs ${count} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);