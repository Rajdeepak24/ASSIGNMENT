import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import { fetchTodos } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      todo: title,
      description,
      status: "pending",
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const updateTodo = (id, updatedFields) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, ...updatedFields } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Kanban Todo App</h1>
      <KanbanBoard
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
