import React, { Fragment } from 'react'

const Form = ({ todoValue, handleTodo }) => {
  return (
    <Fragment>
      {/* Input field */}
      <div className="input-group">
        <input ref={todoValue} className="form-input" type="text" id="input-example-1" placeholder="Name" />
        <button onClick={handleTodo} className="btn input-group-btn btn-p">Post</button>
      </div>
      <br />
    </Fragment>
  )
}

export default Form
