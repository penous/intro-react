import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, toggleTodo, setTodos }) => {
  const data = {
    initialPosition: null,
    targetPosition: null,
    newList: [],
    div: null,
    innerHtml: null,
  };
  const [dragnDrop, setDragnDrop] = useState(data);

  return (
    <div>
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            setTodos={setTodos}
            todoList={todoList}
            index={index}
            dragnDrop={dragnDrop}
            setDragnDrop={setDragnDrop}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
