//import React, { useState } from "react";
//import App from "../App";

const Alert = ({ inputValue, setInputValue, buttonClicked }) => {
  //const [inputValue, setInputValue] = useState("");
  //console.log(handleInputValue);

  const handleChange = (e) => {
    //console.log("Change");
    setInputValue(e.target.value);
  };

  //   const handleClick = () => {
  //     buttonClicked();
  //     //console.log("Clicked");
  //     //console.log(buttonClicked);
  //     //alert({ inputValue });
  //   };

  return (
    <>
      <input autoFocus onChange={handleChange} value={inputValue} />
      {/* <h1>{inputValue}</h1> */}
      {/* <h1>{handleInputValue}</h1> */}
      <button onClick={buttonClicked}>Click me!</button>
    </>
  );
};
export default Alert;
