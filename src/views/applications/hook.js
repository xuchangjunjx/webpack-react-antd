// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const input = useRef(null);
  useEffect(() => {
    console.log("useEffect");
    document.title = `hello ${count}`;
  });

  function hanleChange() {
    console.log(input.current.value);
    setCount(input.current.value);
  }

  return (
    <div>
      <input ref={input} defaultValue={count} onChange={hanleChange} />
      <button onClick={() => setCount(count + 1)}>hook</button>
    </div>
  );
}
