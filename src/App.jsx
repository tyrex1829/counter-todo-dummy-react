import './App.css'

// we need to define state and component

import { useState } from 'react';

// this is my component
function App() {
  // this is my state
  const [count, setCount] = useState(0);
  
  function onClickHandler () {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>counter: {count}</button>
    </div>
  )
}

export default App
