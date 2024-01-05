import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTitle = document.getElementById('title').value;
    const newDescription = document.getElementById('description').value;

    setTodos((prevTodos) => [
      ...prevTodos,
      { title: newTitle, description: newDescription }
    ]);
  }

  return (
    <div>
      <input id='title' type='text' placeholder='title'></input><br /><br />
      <input id='description' type='text' placeholder='description'></input><br /><br />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div><p>Title: {todo.title} </p></div>
            <div><p>Description: {todo.description} </p></div>
          </div>
        )
      })}
    </div>
  )
}

export default App
