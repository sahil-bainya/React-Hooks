import { useState } from "react";

export default function HOCExample() {
  return <>
  <h1>Higher Order Component</h1>
  <HOCRed cmp={Counter}/>
  <HOCGreen cmp={Counter}/>
  <HOCBlue cmp={Counter}/>
  </>;
}

function HOCRed(prop){
    return <div style={{backgroundColor:"red", width:100}}><prop.cmp/></div>
}

function HOCGreen(prop){
    return <div style={{backgroundColor:"green", width:100}}><prop.cmp/></div>
}

function HOCBlue(prop){
    return <div style={{backgroundColor:"blue", width:100}}><prop.cmp/></div>
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
