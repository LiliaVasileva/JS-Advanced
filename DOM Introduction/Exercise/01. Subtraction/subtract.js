function subtract() {
    // all in one
    let firstNumber = Number(document.getElementById('firstNumber').value);
// other  way to do it:
    let secondNumber = document.getElementById('secondNumber');
    let secondNumberAsNumber = Number(secondNumber.value);

    let result = firstNumber - secondNumberAsNumber;

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;   
}