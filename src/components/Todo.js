import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id)
  }

  return (
    <div className="form-group" >
      <label className="form-checkbox" >
        <input type='checkbox' checked={todo.checked} onChange={handleToggle} /> <i className="form-icon"></i>
        {todo.value}
      </label>
    </div>
  )
}

export default Todo
