
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import  { useState } from 'react';

function App () {

  const initialTodos = [
    {id: 1, completed: false, title: "Learn React"},
    {id: 2, completed: false, title: "Create my List"},
    {id: 3, completed: false, title: "Stay strong"},
    {id: 4, completed: false, title: "Back home"},
  ]
  
  const [todos, setTodos] = useState(initialTodos);

  // const toggleTodo = (id) => {
  //   const newTodos = [...todos]
  //   const todo = newTodos.find(todo => todo.id === id)
  //   todo.complete = !todo.complete
  //   setTodos(newTodos)
  //     }
const toggleTodo = (id) => {
  setTodos(
    todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  )
}

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoForm/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
