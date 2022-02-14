import React from "react";
import "./App.css";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clicked, isClicked] = useState(false);

  const handleButtonClicked = () => {
    isClicked(!clicked);
  };
  return (
    <div className="App">
      <header>
        <h2>Utvikling av interaktive nettsteder - Obligatorisk oppgave 5</h2>
      </header>
      <Wrapper>
        <MyComponent />
        <Title title="Test"/>
      </Wrapper>
      <Food food={[
        { id: 1, food: "Pizza" },
        { id: 2, food: "Hamburger" },
        { id: 3, food: "Coke" }
      ]}/>
      <Alert setInputValue={setInputValue} handleButtonClicked={handleButtonClicked} />
      {clicked ? <p>{inputValue}</p> : null}
    </div>
  );
}

export default App;
