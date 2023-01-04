import React from 'react';
import TodoItem from './TodoItem';


export default function TodoList({todos, toggleTodo}) {
  return (
    <ul className="ul">
   {todos.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo}/>
   })}
    </ul>
  )
}


