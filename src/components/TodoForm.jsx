import React from 'react';
import '../App.css';

 const Todo = () => {
    return (
<form className="inputDiv">
    <label>
    <input className="input" type="text" />
    </label>
    <input className="btn" type="submit" value="Add Todo"/>
</form>
    )
}
export default Todo;