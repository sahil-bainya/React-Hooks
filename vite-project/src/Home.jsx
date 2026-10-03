import { useCallback, useState } from "react";
import Navbar from "./Navbar.jsx";
export default function Home() {
  const [count, setCount] = useState(0);
  const getLength = useCallback(()=>{
     return "abcd"
  },[])
  return (
    <>
      <Navbar getLength={getLength} />
      <h4>{count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}
