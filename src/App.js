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
    <div className="container grid-sm">
      <header className="bg-gray" >
        <h1 className="text-center" >TODO LIST</h1>
      </header>

      {/* Input field */}
      <div className="input-group">
        <input ref={todoValue} className="form-input" type="text" id="input-example-1" placeholder="Name" />
        <button onClick={handleTodo} className="btn input-group-btn btn-p">Post</button>
      </div>
      <br />

      {/* Todo panel */}
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">TODOS</div>
        </div>
        <div className="panel-body">
          <TodoList todoList={todos} toggleTodo={toggleTodo} />
        </div>
        <div className="panel-footer">
        </div>
      </div>
    </div>
  );
}

export default App;
