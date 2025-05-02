import axios from 'axios';

export const fetchTodos = async () => {
  const res = await axios.get("https://dummyjson.com/todos");
  return res.data.todos.map(todo => ({
    id: todo.id,
    todo: todo.todo,
    completed: todo.completed,
    status: todo.completed ? "completed" : "pending"
  }));
};
