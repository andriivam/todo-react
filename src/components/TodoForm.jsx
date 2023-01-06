import React, {useRef} from 'react';
import '../App.css';
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({setTodos}) => {

const inputRef = useRef();

const clickHandler = (e) => {
    e.preventDefault();
const inputElement = inputRef.current;
if(inputElement === '') return
setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), complete: false, title: inputElement.value}]
  })
console.log(inputElement.value)
//inputRef.current.value = null;
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