import React from 'react';
import '../App.css';

export default function TodoItem({todo, toggleTodo}) {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <li className="list">
    <input className="inputCheck" type="checkbox" checked={todo.completed} onChange={handleTodoClick}/>
    {todo.title}
    <button className="rm">&times;</button>
    </li>
  )
}
