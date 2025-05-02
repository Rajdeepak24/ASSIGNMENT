import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-form-input"
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-form-description"
      />
      <button
        type="submit"
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        className="todo-form-addTodoBtn"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
