let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let list = document.getElementById('ul');
// button
let writeMyList = document.getElementById('write-list');

// Function to change text size and color with foreach - Gir samme resultat som funkjsonen under
// let writeList = () => {
//     myList.forEach(e => {
//         listItem = document.createElement("li");
//         listItem.innerHTML = myList[e - 1];
//         list.appendChild(listItem);
//     });
// }

const writeList = () => {
    for (i = 0; i < myList.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = myList[i]
        list.appendChild(listItem);
    }
}

// EventListener for the button
writeMyList.addEventListener('click', () => {
    writeList();
})