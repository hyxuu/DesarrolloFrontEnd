import React from 'react';

const TodoItem = ({ task, onDelete, onComplete, index }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => onComplete(index)} style={{ cursor: 'pointer' }}>
        {task.task} - <small>{task.time}</small>
      </span>
      <button onClick={() => onDelete(index)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
