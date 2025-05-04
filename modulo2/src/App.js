import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (task) => {
    const newTodo = {
      task,
      completed: false,
      time: new Date().toLocaleString(), // Guardar la fecha y hora actual
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
}

export default App;
