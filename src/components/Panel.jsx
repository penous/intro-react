import React, { Fragment } from 'react'
import TodoList from './TodoList'

const Panel = ({ todos, toggleTodo }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Panel
