function addAndSubtract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let subtract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    console.log(subtract(result, num3));

}
addAndSubtract(23, 6, 10);