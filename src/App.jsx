import './App.css'
import { useState } from 'react';

// making todo app
function App() {
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
