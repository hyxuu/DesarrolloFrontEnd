import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <ul>
      {todos.map((task, index) => (
        <TodoItem 
          key={index} 
          task={task} 
          onDelete={onDelete} 
          onComplete={onComplete}
          index={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
