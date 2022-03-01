const TodoInputForm = ({
  inputTitle,
  inputContent,
  setInputTitle,
  setInputContent,
  todos,
  setTodos,
  handleSubmit,
}) => {
  const inputTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const inputContentHandler = (event) => {
    setInputContent(event.target.value);
  };

  // Husk - Flex på style form'en, og i tillegg endre så det kun blir brukt én input handler..

  // const id = () => {
  //   todos.map((todo) => {
  //     return todo.id;
  //   });
  // };
  // TODO - Legg til completed for å sjekke todo'en for videreutvikling meed filter alternativer

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        inputTitle: inputTitle,
        inputContent: inputContent,
        // completed: false,
        id: todos.length,
        // id: todos.map((todo) => {
        //   return todo.id;
        // }),
      },
    ]);
    // console.log(setTodos);
    // console.log(todo.id);
    // console.log(todos.length);
    setInputTitle("");
    setInputContent("");
  };

  return (
    <>
      <form className="todo-input-form" onSubmit={submitTodoHandler}>
        <label htmlFor="title">Title</label>
        <input
          //placeholder="Add a todo title"
          name="title"
          id="title"
          type="text"
          value={inputTitle}
          onChange={inputTitleHandler}
        />
        <label htmlFor="content">Content</label>
        <textarea
          //placeholder="Add content"
          name="content"
          id="content"
          type="text"
          value={inputContent}
          onChange={inputContentHandler}
        />
        <button
          type="submit"
          className="todo-input-button"
          //onClick={submitTodoHandler}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoInputForm;
