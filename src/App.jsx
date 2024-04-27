import './App.css'
import { useState } from 'react';

// making todo app
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "workout from 7-8",
    completed: "false"
  }, {
    title: "Study DSA",
    description: "Study from 12-5",
    completed: "true"
  }])
  
  return (
    <div>
      <button onClick={() => {
        setTodos([...todos, {
          title: "New Title",
          description: "New description of new todo",
          completed: false
        }])
      }}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}

      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

// component
function Todo (props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default App
