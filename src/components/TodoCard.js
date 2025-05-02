import React, { useState } from "react";

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.todo);
  const [description, setDescription] = useState(todo.description || "");

  const handleDragStart = (e) => {
    e.dataTransfer.setData("todoId", todo.id);
  };

  const handleSave = () => {
    updateTodo(todo.id, { todo: title, description });
    setIsEditing(false);
  };

  return (
    <div draggable onDragStart={handleDragStart} className="todo-card">
      {isEditing ? (
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="todoCard-edit-title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Description"
            className="todoCard-edit-textArea"
          />
          <button onClick={handleSave} className="todoCard-saveBtn">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h4 style={{ margin: "0 0 5px", fontSize: "18px", color: "#333" }}>
            {todo.todo}
          </h4>
          <p style={{ margin: "0 0 10px", color: "#666", fontSize: "14px" }}>
            {todo.description}
          </p>
          <button onClick={() => setIsEditing(true)} className="todoCard-edit">
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="todoCard-delete"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoCard;
