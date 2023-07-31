MAX_NUMBER = 10;
MIN_NUMBER = -10;
STEP_AMOUNT = 5;

const num = document.querySelector('[data-key="num"]');
const add = document.querySelector('[data-key="add"]');
const subtract = document.querySelector('[data-key="subtract"]');

const subtractHandler = () => {
    const newValue = parseInt(num.value) - STEP_AMOUNT
    num.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }
    if (num.value <= MIN_NUMBER) {
        subtract.disabled = true
    } 
}

const addHandler = () => {
    const newValue = parseInt(num.value) + STEP_AMOUNT
    num.value = newValue
 
    if (subtract.disabled === true) {
        subtract.disabled = false
    }
    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }
}

subtract.addEventListener("click", subtractHandler)

add.addEventListener("click", addHandler)