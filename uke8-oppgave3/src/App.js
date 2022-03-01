import "./main.scss";
// import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

/*

- Style i henhold til design.png. Se filen i mappen public
  - Husk å mobiltilpasse (se styles.css TODO)
- Flytt koden under ut i komponenter. F.eks Navigation, Sidebar m.fl
- Bruk nødvendig antall props for å gjøre komponentene fleksible
- Gjør det mulig å trykke på "send" (sende skjema). Vis hva brukeren senden ved hjelp av state. Innholdet skal kun vises etter at send er trykket. Husk .preventDefault() for å unngå refresh av siden.
- Det er to knapper i koden i <aside>. Ved klikk på denne skal <span> som ligger under vises / skjules for den knappen som trykkes på.

*/

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
