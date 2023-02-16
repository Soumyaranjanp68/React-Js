import React,{useState} from "react";
import "./App.css"

export default function Counter() {
  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }

  return (
    <div class="container">
    <h2>Counter</h2>
    <p>{count>=0?count:"Only positive value acepted"}</p>
    <button class="btn"  onClick={increment}>Increment</button>
    {" "}
    <button class="btn" onClick={decrement}>Decrement</button>
    </div>
  );
}

