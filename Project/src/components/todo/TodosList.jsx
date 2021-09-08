import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="listItem" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`todoList ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="buttonComplete taskButton"
              onClick={() => handleComplete(todo)}
            >
              OK
            </button>
            <button
              className="buttonEdit taskButton"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>
            <button
              className="buttonDelete taskButton"
              onClick={() => handleDelete(todo)}
            >
              Del
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
