import React from "react";
import TodoCard from "./TodoCard";
import "./styles.css";

const Lane = ({ status, todos, onDrop, updateTodo, deleteTodo }) => {
  const handleDrop = (e) => {
    const todoId = parseInt(e.dataTransfer.getData("todoId"));
    onDrop(status, todoId);
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div onDrop={handleDrop} onDragOver={allowDrop} className="todo-lane">
      <h3 className="todo-header">{status}</h3>
      <div style={{ flexGrow: 1 }}>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Lane;
