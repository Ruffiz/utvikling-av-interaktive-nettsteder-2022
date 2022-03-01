const TodoItem = ({ inputTitle, inputContent, todos, setTodos, todo }) => {
  const deleteTodoHandler = () => {
    //console.log(todo);
    // Bruker en filter på todos for så å sjekke om todo item'et fra
    // det allerede gjennomgåtte item'et i Todolist så fjerne med en ny setTodos.
    setTodos(todos.filter((todoEl) => todoEl.id !== todo.id));
  };

  //TODO - Innfør complete knappen for å videreutvikle Todo applikasjonen med et filter på completed propertien.

  // const completeHandler = () => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };
  // const handleTextSize = () => {
  // const id = () => {
  //   todos.map();
  // };

  // console.log(todos);
  // console.log(id);
  // }
  return (
    <>
      <li key={todo.id} className="todo-item">
        <article className="inputTitle">{inputTitle}</article>
        <article className="inputContent">{inputContent}</article>
        <button onClick={deleteTodoHandler} type="button" className="trash-btn">
          Complete
        </button>
      </li>
      {/* <button onClick={completeHandler} type="button" className="complete-btn">
        Complete
      </button> */}
    </>
  );
};
export default TodoItem;
