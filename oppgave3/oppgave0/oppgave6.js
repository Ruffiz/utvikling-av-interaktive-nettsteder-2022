let ulList = document.querySelector('#list');
let removeLiBtn = document.querySelector('#remove-li');

//står ikke i oppgaveteksten, men fjerner herfra fra siste element.
const removeLiElement = () => {
    ulList.removeChild(ulList.lastElementChild);
}

// EventListener for the button
removeLiBtn.addEventListener('click', () => {
    removeLiElement();
});