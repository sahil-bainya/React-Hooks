import { useState } from "react";

const EnhancedComp = HOC(Counter);

export default function HOCFunction() {
  return (
    <>
      <h1>Higher Order Component</h1>
      <EnhancedComp />
    </>
  );
}

function HOC(OrgComp) {
  return function () {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <OrgComp />
      </div>
    );
  };
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
