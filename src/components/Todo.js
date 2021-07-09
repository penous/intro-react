import React from 'react';

const Todo = ({
  todo,
  toggleTodo,
  setTodos,
  todoList,
  index,
  dragnDrop,
  setDragnDrop,
}) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const dragStart = (e) => {
    // Get innerHtml
    let innerHtml = e.target.children[0].innerHTML;
    // Set state
    setDragnDrop({
      ...dragnDrop,
      initialPosition: index,
      div: e.target,
      innerHtml,
    });

    // Hide the style when dragging
    // Use timeout so its still visible while dragging
    setTimeout(() => {
      e.target.children[0].innerHTML = '';
      e.target.style.border = 'dashed 1px black';
    }, 0);
  };

  const dragDrop = (e) => {
    e.preventDefault();
    // Update Todos
    setTodos(dragnDrop.newList);
  };

  const dragOver = (e) => {
    e.preventDefault();
    const newList = [...todoList];

    // Get index of item dragged
    const initialPosition = dragnDrop.initialPosition;
    // Get dragged item
    const draggedItem = todoList[initialPosition];
    // Delete dragged item from list
    newList.splice(initialPosition, 1);
    // Insert dragged item on new position
    newList.splice(index, 0, draggedItem);
    // Set updated order list
    setDragnDrop({ ...dragnDrop, targetPosition: index, newList });
  };

  const dragEnd = () => {
    // Set style again to show it
    dragnDrop.div.style.border = 'none';
    dragnDrop.div.children[0].innerHTML = dragnDrop.innerHtml;
  };

  return (
    <div
      draggable='true'
      onDragStart={(e) => dragStart(e)}
      onDrop={(e) => dragDrop(e)}
      onDragOver={(e) => dragOver(e)}
      onDragEnd={(e) => dragEnd()}
      className='form-group form-size'
    >
      <label className='form-checkbox on-drag d-inline'>
        <input type='checkbox' checked={todo.checked} onChange={handleToggle} />{' '}
        <i className='form-icon'></i>
        {todo.value}
        <i className='icon icon-menu float-right burger '></i>
      </label>
    </div>
  );
};

export default Todo;
