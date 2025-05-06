let currentInput = "";
let operator = "";
let previousInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}
