function palindromeIntegers(arr) {
    let isPalindrome = true;

    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i] + "";
        let newArr = arr1.split('').reverse().join('');
        if (newArr === arr1) {
            console.log(isPalindrome);
        } else {
            console.log(false);
        }
    }


}
palindromeIntegers([123, 323, 421, 121]);