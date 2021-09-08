import React, { useState } from "react";
import "./Todo.css";
import Header from "../../components/todo/Header";
import Form from "../../components/todo/Form";
import TodosList from "../../components/todo/TodosList";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="appWrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};
export default Todo;
