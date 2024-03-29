import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Panel from './components/Panel';
import Form from './components/Form';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), value: 'Hello', checked: false },
    { id: uuidv4(), value: 'World', checked: true },
    { id: uuidv4(), value: 'Drag', checked: false },
    { id: uuidv4(), value: 'Me', checked: false },
    { id: uuidv4(), value: 'To', checked: false },
    { id: uuidv4(), value: 'Switch places', checked: false },
  ]);
  const todoValue = useRef();

  const handleTodo = () => {
    const value = todoValue.current.value;
    if (value === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), value: value, checked: false }];
    });
    todoValue.current.value = null;
  };

  const toggleTodo = (id) => {
    const copy = [...todos];
    const todo = copy.find((todo) => todo.id === id);
    todo.checked = !todo.checked;
    setTodos(copy);
  };

  useEffect(() => {
    const todos = localStorage.getItem('todosApp.todos');
    if (todos) setTodos(JSON.parse(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem('todosApp.todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container grid-sm'>
      <Header />

      <Form todoValue={todoValue} handleTodo={handleTodo} />
      <Panel todos={todos} toggleTodo={toggleTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
