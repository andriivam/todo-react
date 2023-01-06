import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import  { useState, useEffect} from 'react';
// import { v4 as uuidv4 } from "uuid";

const LSKEY = "MyTodoApp";

function App () {

  const initialTodos = [];
  
  const [todos, setTodos] = useState(initialTodos);


const toggleTodo = (id) => {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
    }

// Save todos to local storage
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem(LSKEY + '.todos'))
  if(savedTodos) setTodos(savedTodos)
}, []);

useEffect(() => {
  localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
}, [todos]);

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoForm setTodos={setTodos}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
