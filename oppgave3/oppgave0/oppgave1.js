/*  Her setter jeg dem som "variabler" først,
    men trenger ikke det, kan eventuelt bare hente det rett ut i funksjonen. */

let text = document.getElementById('remove');
let remove_btn = document.getElementById('remove-btn');

let removeText = () => {
    text.remove();
}

remove_btn.addEventListener('click', () => {
    removeText();
})


/*  Sånn kunne det også settes opp for å kunne fjerne teksten, 
    men da uten å ta bort elementet, men resultat i html blir lignende. */

// let removeTextBtn = document.querySelector('#remove-btn');

// removeTextBtn.addEventListener('click', () => {
//     document.getElementById('remove').innerHTML = "";
// });