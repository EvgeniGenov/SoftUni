function passwordValidator(password) {

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    };

    function isOnlyLettersAndDigits(stringPassword) {

        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt();
            if (!(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)
            ) {
                return false;
            }
        }
        return true;
    }


    function isHavingAtleastTwoDigits(stringPassword) {
        let count = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt();
            if (currChar >= 48 && currChar <= 57) {
                count++
            }
        }
        return count >= 2 ? true : false;
    }

    let isLengthValid = isLengthEnough(password);
    let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
    let isContainingAtLeastTwoDigits = isHavingAtleastTwoDigits(password);


    if (isLengthValid && isLettersAndDigitsOnly && isContainingAtLeastTwoDigits) {
        console.log('Password is valid');
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isLettersAndDigitsOnly) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isContainingAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');

    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');