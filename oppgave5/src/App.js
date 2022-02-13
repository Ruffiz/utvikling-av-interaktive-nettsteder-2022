// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";
import { useState } from "react";

//TODO - Send setInputValue funksjonen  som en prop til <Alert> fra app.js
//TODO - Ved å bruke denne propen skal du kunne oppdatere verdien av inputValue i app.js, når vi skriver inn i inputen i Alert
//TODO - Du kan nå fjerne den interne staten i Alert

//TODO - Kun vis innholdet av inputValue når man klikker på knappen inni Alert
//TODO - Når klikk på knappen i Alert skal verdien av inputValue være det som er skrivd i input inni Aleret komponentet
// For å gjøre dette må du ha state (isClicked) i app.js som er oppdatert til (true/false) når knappen er trykket. Funksjonen som blir brukt
// for å oppdatere state må bli sendt som en prop til Alert så den kan oppdatere / lese dens verdi
//TODO - Bruk conditionals rundt <p>{inputValue}</p> for bare å skrive ut meldingen når knappen er trykket.
//TODO - Gjøm <p>{inputValue}</p> hvis vi klikker på knappen en annen gang

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clicked, isClicked] = useState(false);

  const buttonClicked = () => {
    isClicked(!clicked);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Utvikling av interaktive nettsteder - Obligatorisk oppgave 5</h2>
      </header>
      <Food />
      <Wrapper>
        <MyComponent />
        <Title />
      </Wrapper>
      <Alert setInputValue={setInputValue} buttonClicked={buttonClicked} />
      {clicked ? <p>{inputValue}</p> : null}
    </div>
  );
}

export default App;
