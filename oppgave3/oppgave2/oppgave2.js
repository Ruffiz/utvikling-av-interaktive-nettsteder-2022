const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];

// TODO: Hent HTML #id med getElementById
const userUl = document.getElementById("users");
const inputSearch = document.getElementById('name');
const inputAge = document.getElementById('age');
const filterBtn = document.getElementById('filter');

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene
const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  };

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = (e) => {
    const searchName = e.target.value.toLowerCase();
    const filteredUserNames = users.filter(user => {
        return user.name.toLowerCase().includes(searchName);//
    });
    createTableUI(filteredUserNames);
}

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleAgeFilter = () => {
    const filteredUserAges = users.filter(user => {
        if ( user.age >= inputAge.value) {
        return user.age;
        }
    });
    createTableUI(filteredUserAges);
}

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
inputSearch.addEventListener('keyup', (e) => {
    handleSearch(e);
});

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener('click', () => {
    handleAgeFilter();
});

const main = () => {
  createTableUI(users);
};

main();