function commonElements(arr1, arr2) {
    let matches = '';

    for (let i = 0; i < arr1.length; i++) {
        matches = '';
        if (arr2.includes(arr1[i])) {
            matches += arr1[i];
            console.log(matches);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])