import React from 'react';

const TodoItem = ({ todo }) => (
  <li>
    <input type="checkbox" defaultChecked={todo.completed} />
    {todo.text}
  </li>
);

export default TodoItem;
