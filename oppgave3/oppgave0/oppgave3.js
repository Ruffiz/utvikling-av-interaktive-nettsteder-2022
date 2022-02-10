let input = document.getElementById('input');
let inputText = document.getElementById('input-text');

// EventListener for input with keyup
input.addEventListener('keyup', () => {
        writeText();
});

let writeText = () => {
    inputText.innerHTML = input.value;
};