import "./main.scss";
import { useState } from "react";
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  // TODO - Fiks form for å lagre title og content i ett.
  // const [form, setForm] = useState({ title: "", content: "" });

  // const handleChange = (event) => {
  //   const inputName = event.target.name;
  //   const inputValue = event.target.value;
  //   setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  // };

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState([]);

  return (
    <main className="main">
      <Navbar />
      <TodoInputForm
        todos={todos}
        setTodos={setTodos}
        id={id}
        setId={setId}
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        inputContent={inputContent}
        setInputContent={setInputContent}
      />
      <TodoList todos={todos} setTodos={setTodos} id={id} setId={setId} />
    </main>
  );
}

export default App;
