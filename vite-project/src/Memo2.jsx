import { useEffect, useMemo, useState } from "react";

export default function Memo2() {
  const [dark, setdark] = useState(false);
  //   const theme = {
  //     dark: { backgroundColor: "#000000" },
  //     light: { backgroundColor: "#ffffff" },
  //   };
  //   useEffect(()=>{
  //     console.log("theme changed") // theme will change every re renders bcz at each time it creates a new object with a new reference
  //   },[theme])
  const theme = useMemo(() => {
    return {
      dark: { backgroundColor: "#000000" },
      light: { backgroundColor: "#ffffff" },
    };
  }, []);
  return (
    <>
      <h2 style={theme[dark ? "dark" : "light"]}>Theme</h2>
      <button onClick={() => setdark((prev) => !prev)}>Toggle</button>
    </>
  );
}
