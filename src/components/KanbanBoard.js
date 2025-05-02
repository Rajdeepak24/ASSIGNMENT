import React from "react";
import Lane from "./Lane";
import TodoForm from "./TodoForm";

const statuses = ["pending", "in progress", "completed"];

const KanbanBoard = ({ todos, setTodos, addTodo, updateTodo, deleteTodo }) => {
  const onDrop = (status, todoId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "10px" }}>
      <TodoForm onSubmit={addTodo} />
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {statuses.map(status => (
          <Lane
            key={status}
            status={status}
            todos={todos.filter(todo => todo.status === status)}
            onDrop={onDrop}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
