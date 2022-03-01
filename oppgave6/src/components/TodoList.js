import TodoItem from "./TodoItem";

//Bruk grid på ul elementene for å håndtere stylingen av todos'ene og flex på form'en
const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <div className="todo-list">
        {todos.length < 1 ? <h1>Legg til Todo's</h1> : <h1>My Todo's</h1>}
        <ul className="todo-list-ul">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              //id={id}
              inputTitle={todo.inputTitle}
              inputContent={todo.inputContent}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
