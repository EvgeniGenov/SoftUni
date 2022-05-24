function listOfProducts(arr) {
    let sortArr = arr.sort();
    for (let i = 0; i < sortArr.length; i++) {
        console.log(`${i+1}.${sortArr[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);