import { useMemo, useState } from "react";
const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    magical: i === 29_000_000,
  };
});
export default function Memo() {
  const [count, setCount] = useState(0);
  const [numbers, setnumbers] = useState(nums);
  const magical = useMemo(
    () => numbers.find((item) => item.magical), // expensive computation
    [numbers],
  );
  return (
    <>
      <h3>Magical : {magical.index}</h3>
      <h2>Count is {count}</h2>
      <button
        onClick={() => {
          setCount(count=>count+ 1);
          if (count === 10) {
            setnumbers(
              new Array(10_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  magical: i === 9_000_000,
                };
              }),
            );
          }
        }}
      >
        +
      </button>
    </>
  );
}
