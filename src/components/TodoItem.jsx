import React, {useContext} from 'react';
import '../App.css';
import Context from './Context';

export default function TodoItem({todo, toggleTodo}) {
  const {deleteTodo} = useContext(Context);
  // console.log('todo title', todo)
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <li className="list">
    <input className="inputCheck" type="checkbox" checked={todo.completed} onChange={handleTodoClick}/>
    {todo.title}
    <button onClick={() => deleteTodo(todo.id)} className="rm">&times;</button>
    </li>
  )
}
