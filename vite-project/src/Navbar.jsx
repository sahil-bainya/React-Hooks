import { memo } from "react";
function Navbar({ getLength }) {
  console.log("Navbar rendered");

  return (
    <>
      <h3>{getLength()}</h3>
    </>
  );
}

export default memo(Navbar);
