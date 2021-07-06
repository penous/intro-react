import React from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, toggleTodo }) => {
  return (
    todoList.map(todo => {
      return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
  )
}

export default TodoList
