import React, { useState } from 'react';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const initialTodos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Go for a run', completed: true },
];

export default function Home() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Layout>
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Layout>
  );
}
