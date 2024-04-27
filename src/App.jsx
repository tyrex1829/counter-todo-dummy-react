import './App.css'

// we need to define state and component

import { useState } from 'react';

// this is my component
function App() {
  // this is my state
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  )
}

// component
function CustomButton (props) {

  function onClickHandler () {
    props.setCount(props.count + 1);
  }

  return(
    <button onClick={onClickHandler}>
      counter: {props.count}
    </button>
  )
}

export default App
