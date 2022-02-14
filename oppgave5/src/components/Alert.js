const Alert = ({ inputValue, setInputValue, handleButtonClicked }) => {
  //const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    //console.log("Change");
    setInputValue(e.target.value);
  };

  //   const handleClick = () => {
  //     buttonClicked();
  //   };

  return (
    <>
      <input autoFocus onChange={handleChange} value={inputValue} />
      {/* <h1>{inputValue}</h1> */}
      <button onClick={handleButtonClicked}>Click me!</button>
    </>
  );
};
export default Alert;
