import React, { useState } from "react";

function PostApi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function saveUser() {
    console.log({ name, email, password });
    let data = { name, email, password };
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }
  return (
    <div className="App">
      <h1>POST API Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />{" "}
      <br /> <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />{" "}
      <br /> <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        name="password"
        placeholder="password"
      />{" "}
      <br /> <br />
      <button type="button" onClick={saveUser}>
        Save New User
      </button>
    </div>
  );
}

export default PostApi;
