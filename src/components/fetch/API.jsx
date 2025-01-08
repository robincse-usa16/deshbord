import React, { useState } from "react";
import { useEffect } from "react";

function API() {
  const [code, setCode] = useState(null);
  useEffect(() => {
    const fetchCode = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      console.log(data);
      setCode(data);
    };
    fetchCode();
  }, []);
  return (
    <div>
      <h1>Hello API</h1>
      <div>{code?.title}</div>
    </div>
  );
}

export default API;
