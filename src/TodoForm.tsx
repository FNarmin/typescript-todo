import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
const TodoForm = () => {
    const [newTodo, setNewTodo] = useState<string>("");
    const [addTodo, setAddtodo] = useState<Array<string>>([]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAddtodo([...addTodo, newTodo]);
        setNewTodo("");
    }
  return (
    <form className='todo-form'>
        <ul>
            <li>Best of the Programming</li>
            <li>My Typescript</li>
        {addTodo.map((todo)=>(<li>{todo}</li>))}
        </ul>
        <input type='text' value={newTodo} className='todo-input' placeholder='Add item' onChange={handleChange}/>
        <button type='submit' className='todo-button' onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default TodoForm;