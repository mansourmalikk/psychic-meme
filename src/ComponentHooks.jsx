import { useState } from "react";
import { useEffect } from "react";
export function ComponentHook() {
  const [count, setCount] = useState(0);
  let clickHandler = ()=>{
   setCount(count+1)
  }
useEffect(()=>{alert("Welcome to react!")},[])
  return (
    <>
      <div>{count}</div>
      <button onClick={clickHandler}>CLick</button>
    </>
  );
}
