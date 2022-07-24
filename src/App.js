import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Todo from './components/Todo';

function App() {

  const title = "lalala"

   let [todos, setTodos] = useState([])
  let [todo, setTodo] = useState({name: ""})
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, todo])
    inputRef.current.value = ''

    console.log(todos)
  }

  function handleChange(e) {
    setTodo({ ...todo, name: e.target.value })
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={handleChange} ref={inputRef}/>
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
      </ul>
    </div>
  );
}

export default App;
