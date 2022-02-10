let inputText = document.querySelector('#name');
let disableRedBorderBtn = document.querySelector('#order');

// EventListener for input with keyup
inputText.addEventListener('keyup', () => {
        disableBtn();
});

// 4 tegn = red border, alt over 4 blir disabled
let disableBtn = () => {
    if (inputText.value.length === 4) {
        disableRedBorderBtn.style.border = "1px solid red";
    }
    else if (inputText.value.length > 4) {
        disableRedBorderBtn.disabled = true;
    }
};