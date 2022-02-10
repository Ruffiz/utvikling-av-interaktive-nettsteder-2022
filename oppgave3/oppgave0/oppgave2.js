let text = document.getElementById('change');
let changeBtn = document.getElementById('change-btn');

// Function to change text size and color
let changeText = () => {
    text.style.fontSize = '36px',
    text.style.color = 'purple';
    text.innerHTML = "Phooooff!! Se der ble det endret gitt!";
}

// EventListener for the button
changeBtn.addEventListener('click', () => {
    changeText();
})