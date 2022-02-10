let selectBox = document.querySelector('#select');
let input = document.querySelector('#text');
let createBtn = document.querySelector('#create');
let newElement = document.querySelector('#placeholder');

const writeElement = () => {

    if (selectBox.value == 'h2') {
        //console.log('h2');
        let h2 = document.createElement('h2');
        h2.innerHTML = input.value;
        newElement.appendChild(h2);
    }
    else if (selectBox.value == 'h3') {
        //console.log('h3');
        let h3 = document.createElement('h3');
        h3.innerHTML = input.value;
        newElement.appendChild(h3);
    }
    else if (selectBox.value == 'span') {
        //console.log('span');
        let span = document.createElement('span');
        span.innerHTML = input.value;
        newElement.appendChild(span);
    }
    else if (selectBox.value == 'p') {
        //console.log('p');
        let p = document.createElement('p');
        p.innerHTML = input.value;
        newElement.appendChild(p);
    }
};

// EventListener for the button
createBtn.addEventListener('click', () => {
    writeElement();
})