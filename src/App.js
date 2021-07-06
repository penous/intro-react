import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([{ id: uuidv4(), value: "Hello", checked: false }, { id: uuidv4(), value: "World", checked: true }])
  const todoValue = useRef()

  const handleTodo = () => {
    const value = todoValue.current.value
    if (value === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), value: value, checked: false }]
    })
    todoValue.current.value = null
  }

  const toggleTodo = (id) => {
    const copy = [...todos]
    const todo = copy.find(todo => todo.id === id)
    todo.checked = !todo.checked
    setTodos(copy)
  }

  useEffect(() => {
    const todos = localStorage.getItem('todosApp.todos')
    if (todos) setTodos(JSON.parse(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem("todosApp.todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
