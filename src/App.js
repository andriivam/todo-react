import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import  { useState, useEffect} from 'react';
import Context from './components/Context';

const LSKEY = "MyTodoApp";

function App () {

  const initialTodos = [];
  
  const [todos, setTodos] = useState(initialTodos);

// Save todos to local storage
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem(LSKEY + '.todos'))
  if(savedTodos) setTodos(savedTodos)
}, []);

useEffect(() => {
  localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
}, [todos]);

const toggleTodo = (id) => {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
    }



const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
  }

// const deleteTodo = () => {
// const newTodos = todos.filter(todo => todo !== todo.completed)
// console.log('deleteTodo')
// setTodos(newTodos)
// }

  return (
    <Context.Provider value={{deleteTodo}}>
    <div className="App">
      <h1>My Todo App</h1>
      <TodoForm setTodos={setTodos}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </Context.Provider>
  );
}

export default App;
