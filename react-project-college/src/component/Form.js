
import React from 'react';
import {v4 as uuidv4 } from 'uuid';



const Form = ({input , setInput , todos , setTodos}) => {

    const onInputChange =(event) => {
        setInput(event.target.value)
    };

    const onFormSubmit =(event) =>{
        event.preventDefault();
        setTodos([])
    }


    return (
        <div className="form">
            <form >
                <input type="text" className='task-input' 
                placeholder='Enter a Todo..'
                value={input}  required
                onChange={onInputChange}/>
                <button className='button-add'>Add</button>
            </form>
        </div>
    )
}
export default Form;