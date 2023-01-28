/* import './App.css';
import React , {useState} from 'react';
import Header from './component/Header';
import Form from './component/Form';

const  App = () =>  {

  const[input , setInput ] =useState("");
  const[todos , setTodos ] =useState([]);

  return (
    <div className='container'>
      <div className="app-wrapper">

        <div>
          <Header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
 */

import { useState } from "react";
import './App.css';

function App() {
    const initialValue = [{  id : 0 ,todo: "get groceries", isChecked: true }];
    const [list, setList] = useState(initialValue);
    const [inputValue, setInputValue] = useState("");

    const delete

    return (
        <div>
            <div className="main-container">
                <h1>Todo</h1>
                <div className="input-container">
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(event) => {
                            
                            const value = event.target.value;
                            setInputValue(value);
                        }}
                    />
                    &nbsp;
                    <button onClick={() => {
                        // take value from inputValue
                        const value = inputValue;

                        // create list_item object with inputValue
                        const obj = { todo: value, isChecked: false };
                        
                        // push list_item object into list state
                        setList([...list, obj]);
                    }}>Add Todo</button>
                </div>
            </div>
            <div id="list">
                {list.map((listItem) => (
                        <div className="list-item">
                            <input type="checkbox" checked={listItem.isChecked} />
                            <p className={listItem.isChecked ? "striked" : ""}>{listItem.todo}</p>
                            <button className='delete-btn' 
                            >x</button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default App;