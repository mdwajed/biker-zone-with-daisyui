import { useState } from "react";
import "./App.css";
import Posts from "./posts";
function App() {
  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <Counter></Counter>
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
        <hr />
      </ol>
      <Posts></Posts>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0); // initial state 0

  return (
    <div>
      <p>count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
export default App;
