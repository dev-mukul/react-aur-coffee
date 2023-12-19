import { useState } from "react";
import reactLogo from './assets/react.svg';
import citeLogo from '/vite.svg'
function App() {
      //  var       fun  
  let [counter, mukulCounter]  = useState(15)

  // let counter =  15

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    mukulCounter(counter + 1)
  }

  return (
    <>

    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button>Remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
