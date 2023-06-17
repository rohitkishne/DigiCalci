let input = document.getElementById("result");
function appendToInput(value) {
    input.value = input.value + value;
}

function clearInput() {
    input.value = '';
}

function performOperation(operator) {
    appendToInput(operator);
}

function calculate() {
    try {
        const result = (input.value) ? eval(input.value) : '';
        input.value = result;
    } catch (error) {
        input.value = 'Found Error! Clear the Console and Try Again';
    }
}