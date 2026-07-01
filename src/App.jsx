import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount((count) => count + 1)
  }
  function reSetCount() {
    setCount((count) => count = 0)
  }
  function decrementCount() {
    setCount((count) => count - 1)
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Small Counter App</h1>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="counter"
            onClick={incrementCount}
          >Increment
          </button>
          <button
            type="button"
            className="counter"
            onClick={decrementCount}
          >
            Decrement
          </button>
          <button
            type="button"
            className="counter"
            onClick={reSetCount}
          >
            Reset
          </button>
        </div>
        <p>Count is {count}</p>
      </section>
      <Todo />
    </>
  )
}

export default App
