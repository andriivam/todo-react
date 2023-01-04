import React, {useRef} from 'react';
import '../App.css';

const TodoForm = ({setTodos}) => {

const inputRef = useRef();

const clickHandler = (e) => {
    e.preventDefault();
const inputElement = inputRef.current;
if(inputElement === '') return
// const newTodos = [...todos]
// newTodos.push(inputElement)
// setTodos(newTodos);

setTodos(prevTodos => {
    return [...prevTodos, { id: 5, title: inputElement.value, complete: false}]
  })
console.log(inputElement.value)
inputRef.current.value = null;
}

    return (
<form className="inputDiv">
    <label>
    <input ref={inputRef} className="input" type="text" placeholder="Write a new todo"/>
    </label>
    <input  onClick={clickHandler} className="btn" type="submit" value="Add Todo"/>
</form>
    )
}
export default TodoForm;